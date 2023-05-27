import { Post } from "../../posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Post, (_post) => _post.author)
  posts: Post[];

  @Column('varchar')
  email: string;

  @Column('varchar')
  avatar: string;

  @Column('varchar', { length: 25 })
  name: string;

  @Column('varchar')
  code: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
