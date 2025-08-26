import { Injectable } from '@nestjs/common';
import {
  Repository,
  EntityTarget,
  FindOptionsWhere,
  In,
  EntityManager,
} from 'typeorm';
import { PrimaryEntity } from './primary.entity';

@Injectable()
export class PrimaryRepository<T extends PrimaryEntity> extends Repository<T> {
  constructor(
    private readonly entity: EntityTarget<T>,
    private readonly entityManager: EntityManager,
  ) {
    super(entity, entityManager);
  }
  public async findById(id: string): Promise<T | null> {
    return this.findOne({
      //@ts-expect-error O typescript por algum motivo chora
      where: {
        id,
      },
    });
  }

  public async findInIds(ids: string[]): Promise<T[]> {
    return this.find({
      where: {
        id: In(ids),
      } as FindOptionsWhere<T> | FindOptionsWhere<T>[] | undefined,
    });
  }
}
