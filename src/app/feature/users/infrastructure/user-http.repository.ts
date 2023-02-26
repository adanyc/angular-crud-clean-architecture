import { HttpClient } from '@angular/common/http';
import { delay, lastValueFrom, of } from 'rxjs';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

export class UserHttpRepository implements UserRepository {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
  ];

  constructor(private http: HttpClient) { }

  create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);

    if (index >= 0) {
      this.users.splice(index, 1);
    }

    return lastValueFrom(of(undefined).pipe(delay(1000)));
  }

  update(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  find(id: number): Promise<User | undefined> {
    return lastValueFrom(of(this.users.find(user => user.id === id)).pipe(delay(1000)));
  }

  findAll(): Promise<User[]> {
    return lastValueFrom(of(this.users).pipe(delay(1000)));
  }
}