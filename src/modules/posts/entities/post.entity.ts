import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ManyToOne(() => User, (_user) => _user.posts, { cascade: ["remove"] })
  author: User | string;

  @Column('varchar', { length: 122 })
  content: string;

  @CreateDateColumn({ type: "timestamp" })
  createAt: Date;
}
