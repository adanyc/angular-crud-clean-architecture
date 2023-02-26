import { Component, Inject } from '@angular/core';
import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: 'user-add.component.html',
})
export class UserAddComponent {
  users: User[] = [];

  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
  ) { }
}