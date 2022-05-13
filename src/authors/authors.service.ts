import { Firestore } from '@google-cloud/firestore';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Author } from 'src/graphql';

@Injectable()
export class AuthorsService implements OnModuleInit {
  private readonly authors: Author[] = [];
  constructor(private readonly firestore: Firestore) {}

  async onModuleInit() {
    const collectionRef = this.firestore.collection('authors');
    const snapshot = await collectionRef.get();
    if (!snapshot.empty) {
      snapshot.forEach((doc) => this.authors.push(doc.data() as Author));
    }
  }

  public async getAll(): Promise<Author[]> {
    return this.authors;
  }

  public async findOneById(id: string): Promise<Author> {
    const collectionRef = this.firestore.collection('authors');
    const authorRef = collectionRef.doc(id);
    const author = await authorRef.get();
    return author.data() as Author;
  }

  public async create(firstName: string, lastName: string): Promise<Author> {
    const collectionRef = this.firestore.collection('authors');
    const docRef = collectionRef.doc();
    const author = {
      id: docRef.id,
      firstName: firstName,
      lastName: lastName,
      posts: [],
    };
    const result = await docRef.set(author);
    this.authors.push(author);
    return {
      id: docRef.id,
      firstName: firstName,
      lastName: lastName,
      posts: [],
    };
  }
}
