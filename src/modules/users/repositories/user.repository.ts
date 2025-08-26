import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/typeorm/primary.repository';
import { TRANSACTIONAL_ENTITY_MANAGER } from 'src/infra/database/typeorm/transactional-entity-manager.provider';
import { EntityManager } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends PrimaryRepository<User> {
  constructor(
    @Inject(TRANSACTIONAL_ENTITY_MANAGER) entityManager: EntityManager,
  ) {
    super(User, entityManager);
  }
}
