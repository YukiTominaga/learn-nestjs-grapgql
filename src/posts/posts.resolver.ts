import { Firestore } from '@google-cloud/firestore';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Post } from 'src/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostResolver {
  constructor(
    private postsService: PostsService,
    private firestore: Firestore,
  ) {}

  @Query('post')
  getPost(@Args('id') id: string): Post {
    return this.postsService.findOneById(id);
  }

  @Mutation()
  async createPost(@Args('id') id: string, @Args('title') title: string) {
    return this.postsService.createPost(id, title);
  }
}
