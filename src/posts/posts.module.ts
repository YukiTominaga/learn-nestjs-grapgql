import { Firestore } from '@google-cloud/firestore';
import { Module } from '@nestjs/common';
import { PostResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsService, PostResolver, Firestore],
  exports: [PostsService],
})
export class PostsModule {}
