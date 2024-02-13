import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginRegisterComponent } from './pages/auth/login-register/login-register.component';
import { P404Component } from './pages/p404/p404.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'auth', component: LoginRegisterComponent },
  { path: 'p404', component: P404Component },
  { path: '**', redirectTo: '/p404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
