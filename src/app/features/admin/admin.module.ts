import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManageComponent } from './users-manage/users-manage.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {path: 'user-manage', component: UsersManageComponent},
  {path: 'home', component: HomeAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  declarations: [UsersManageComponent, HomeAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminModule { }
