import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsModule } from './../posts/posts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserResolverService } from './user-resolver.service';
import { UserRoutingModule } from './user-routing.module';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    PostsModule
  ],
  declarations: [UsersDetailComponent],
  providers: [UserResolverService, UsersService]
})
export class UsersModule { }
