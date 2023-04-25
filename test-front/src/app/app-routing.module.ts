import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayallComponent } from './displayall/displayall.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayallComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
