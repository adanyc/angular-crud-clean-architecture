import { NgModule } from '@angular/core';
import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';

@NgModule({
  declarations: [
    UserAddComponent,
  ],
  imports: [
    UserAddRoutingModule,
  ],
})
export class UserAddModule { }