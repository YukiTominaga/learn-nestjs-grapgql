import { Injectable } from '@nestjs/common';
import { Post } from 'src/graphql';

interface Author {
  id: number;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  public getAll(): Post[] {
    return this.posts;
  }

  public findAll(author: Author): Post[] {
    console.log(author);
    return this.posts;
  }

  public findOneById(id: string): Post {
    return this.posts.filter((post) => post.id === id)[0];
  }

  public upvodeById(id: string): Post {
    const post = this.posts.find((post) => post.id === id);
    post.votes += 1;
    return post;
  }

  public createPost(id: string, title: string, votes?: number): Post {
    const post: Post = {
      id: id,
      title: title,
      votes: votes || 0,
    };

    this.posts.push(post);
    return post;
  }
}
