import { Column, Entity } from 'typeorm';
import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';

@Entity('tasks')
export class Task extends PrimaryEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}
