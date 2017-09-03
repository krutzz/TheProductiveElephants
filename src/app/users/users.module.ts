import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserResolverService } from './user-resolver.service';
import { UserRoutingModule } from './user-routing.module';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UsersDetailComponent],
  providers: [UserResolverService]
})
export class UsersModule { }
