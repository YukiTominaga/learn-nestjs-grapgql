import { Firestore } from '@google-cloud/firestore';
import { Injectable } from '@nestjs/common';
import { Author } from 'src/graphql';

@Injectable()
export class AuthorsService {
  constructor(private readonly firestore: Firestore) {}
  private readonly authors: Author[] = [];

  public getAll(): Author[] {
    return this.authors;
  }

  public findOneById(id: string): Author {
    return this.authors.filter((author) => author.id === id)[0];
  }

  public async create(firstName: string, lastName: string): Promise<Author> {
    const collectionRef = this.firestore.collection('authors');
    const docRef = collectionRef.doc();
    const result = await docRef.set({
      id: docRef.id,
      firstName: firstName,
      lastName: lastName,
      posts: [],
    });
    return {
      id: docRef.id,
      firstName: firstName,
      lastName: lastName,
      posts: [],
    };
  }
}
