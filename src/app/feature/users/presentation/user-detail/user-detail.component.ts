import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: Promise<User | undefined> | null = null;
  userId: number = 0;
  subscription$: Subscription = new Subscription();

  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findUser();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  findUser() {
    this.subscription$ = this.route.params.subscribe(params => {
      this.setUserId(Number(params['id']));
      this.user = this.userRepository.find(this.userId);
    });
  }

  async handleClickDelete() {
    await this.userRepository.delete(this.userId);
    this.goToUsersList();
  }

  handleClickReturn() {
    this.goToUsersList();
  }

  goToUsersList() {
    this.router.navigateByUrl('/users/users-list');
  }

  setUserId(id: number) {
    this.userId = id;
  }
}
