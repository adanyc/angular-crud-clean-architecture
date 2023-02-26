import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: 'users-list.component.html',
})
export class UsersListComponent implements OnInit {
  users: Promise<User[]> | null = null;

  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.users = this.userRepository.findAll();
  }
}