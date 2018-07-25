import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { JsApiTestingComponent } from './js-api-testing/js-api-testing.component';
import { DirApiTestingComponent } from './dir-api-testing/dir-api-testing.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatetripComponent } from './createtrip/createtrip.component';
import { TripsComponent } from './trips/trips.component';


const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'createtrip', component:CreatetripComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'trips/plan/:id',component:TripsComponent},
   {path:'apitesting',component:ApiTestingComponent},
  {path:'jsapitesting',component:JsApiTestingComponent},
  {path:'dirapitesting',component:DirApiTestingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
