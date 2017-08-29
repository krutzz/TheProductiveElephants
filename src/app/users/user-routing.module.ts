import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../auth/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersDetailComponent } from './../users/users-detail/users-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'id', pathMatch: 'full' },
  { path: ':id', component: UsersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
