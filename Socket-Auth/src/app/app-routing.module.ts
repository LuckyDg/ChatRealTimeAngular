import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { NoAuthorizationComponent } from './components/no-authorization/no-authorization.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'no-auth',
    component: NoAuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
