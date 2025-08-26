import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends PrimaryEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
