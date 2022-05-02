
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Author {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
}

export interface Post {
    id: string;
    title: string;
    votes?: Nullable<number>;
}

export interface IQuery {
    author(id: number): Author | Promise<Author>;
    post(id: string): Post | Promise<Post>;
}

export interface IMutation {
    upvotePost(postId: number): Nullable<Post> | Promise<Nullable<Post>>;
    createAuthor(firstName: string, lastName: string): Nullable<Author> | Promise<Nullable<Author>>;
    createPost(id: string, title: string, votes?: Nullable<number>): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
