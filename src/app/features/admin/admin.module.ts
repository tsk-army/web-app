import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManageComponent } from './users-manage/users-manage.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user-manage', component: UsersManageComponent}
]

@NgModule({
  declarations: [UsersManageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
