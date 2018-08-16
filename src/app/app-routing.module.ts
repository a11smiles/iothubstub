import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'transmit', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'transmit', loadChildren: './transmit/transmit.module#TransmitPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
