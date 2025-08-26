import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/typeorm/primary.repository';
import { TRANSACTIONAL_ENTITY_MANAGER } from 'src/infra/database/typeorm/transactional-entity-manager.provider';
import { EntityManager } from 'typeorm';
import { Task } from '../entities/task.entity';
import FilterBuilder, {
  IFilterQuery,
} from 'src/shared/helpers/filters/typeorm/FilterBuilder';

@Injectable()
export class TaskRepository extends PrimaryRepository<Task> {
  constructor(
    @Inject(TRANSACTIONAL_ENTITY_MANAGER) entityManager: EntityManager,
  ) {
    super(Task, entityManager);
  }

  public async findAllForUser(
    user_id: string,
    query: IFilterQuery,
  ): Promise<[Task[], number]> {
    const filterQueryBuilder = new FilterBuilder<Task>(this, query, 'tasks');

    const queryBuilder = filterQueryBuilder
      .build()
      .andWhere('tasks.user_id = :user_id', { user_id });
    const result = await queryBuilder.getManyAndCount();
    return result;
  }
}
