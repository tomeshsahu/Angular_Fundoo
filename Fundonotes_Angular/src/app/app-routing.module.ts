import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgatePasswordComponent } from './forgate-password/forgate-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { ArchievenoteComponent } from './archievenote/archievenote.component';
import { TrashnoteComponent } from './trashnote/trashnote.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path:'resetpassword/:token',
    component:ResetPasswordComponent
  },
  {
    path:'forgatepassword',
    component:ForgatePasswordComponent
  },
  {path:"home",component:DashboardComponent,
  children:[
    {path:"",redirectTo:"/home/notes",pathMatch:'full'},
    {path:"notes", component:GetAllNotesComponent},
    {path:"archive", component:ArchievenoteComponent},
    {path:"trash", component:TrashnoteComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
