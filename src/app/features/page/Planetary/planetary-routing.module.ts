import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetaryComponent } from './planetary/planetary.component';

const routes: Routes = [
  { path: 'planetary-list', component: PlanetaryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetaryRoutingModule {}
