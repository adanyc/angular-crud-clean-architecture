import { Component, Inject } from '@angular/core';
import { UserRepository } from './domain/user.repository';
import { USER_REPOSITORY } from './infrastructure/repository.module';

@Component({
  templateUrl: 'users.component.html',
})
export class UsersComponent {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
  ) { }
}