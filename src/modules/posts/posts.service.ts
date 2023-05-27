import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.postsRepository.insert(createPostDto)
  }

  findAll() {
    return this.postsRepository.find({
      relations: {
        author: true
      }
    })
  }

  findOne(id: string) {
    return this.postsRepository.findOne({
      relations: {
        author: true
      },
      where: {
        id
      }
    })
  }

  remove(id: string) {
    return this.postsRepository.delete({ id })
  }
}
