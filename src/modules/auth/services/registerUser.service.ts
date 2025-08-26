import { ConflictException, Injectable } from '@nestjs/common';
import { HashService } from 'src/infra/plugins/hash/hash.service';
import { UserRepository } from 'src/modules/users/repositories/user.repository';
import { RegisterUserRequest } from '../controller/request/registerUser.request';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class RegisterUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashService: HashService,
  ) {}

  public async execute(data: RegisterUserRequest): Promise<User> {
    const userExists = await this.userRepository.findOneBy({
      email: data.email,
    });

    if (userExists) {
      throw new ConflictException('User with this email already exists.');
    }

    const hashedPassword = await this.hashService.hash(data.password);

    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = hashedPassword;

    return this.userRepository.save(user);
  }
}
