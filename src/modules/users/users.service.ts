import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create({ ...createUserDto, code: await this.generateUserUniqueCode() })
    return this.usersRepository.save(user)
  }

  async findOne({ code, id }: { code?: string, id?: string}) { 
    return await this.usersRepository.find({
      relations: {
        posts: true
      },
      where: {
        code,
        id
      },
    });
  }

  private async generateUserUniqueCode() {
    let code: string;
    let isCodeUnique = false
    while(!isCodeUnique) {
      code = Math.floor(Math.random() * (9999 - 0) + 0).toString().padStart(4, '0');
      if(!(await this.findOne({ code }))) isCodeUnique = true
    }
    return code;
  }
}
