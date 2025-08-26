import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Entity('tasks')
export class Task extends PrimaryEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
