import { Firestore } from '@google-cloud/firestore';
import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver, Firestore],
})
export class AuthorsModule {}
