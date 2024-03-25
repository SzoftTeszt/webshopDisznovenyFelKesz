import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendelesComponent } from './part/rendeles/rendeles.component';
import { NovenyekComponent } from './part/novenyek/novenyek.component';
import { RolunkComponent } from './part/rolunk/rolunk.component';

const routes: Routes = [

  {path:"rolunk", component:RolunkComponent},
  {path:"novenyek", component:NovenyekComponent},
  {path:"rendeles", component:RendelesComponent},
  {path:"", component:RolunkComponent},
  {path:"**", component:RolunkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
