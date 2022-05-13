import {
  Args,
  ResolveField,
  Resolver,
  Query,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id?: string) {
    return this.authorsService.findOneById(id);
  }

  @Query('authors')
  async getAll() {
    return await this.authorsService.getAll();
  }

  @Mutation()
  async createAuthor(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    const author = await this.authorsService.create(firstName, lastName);
    return author;
  }

  @Mutation()
  async upvotePost(@Args('postId') postId: string) {
    return this.postsService.upvodeById(postId);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ id: id });
  }
}
