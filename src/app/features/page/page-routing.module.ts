import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { PlanetaryComponent } from './Planetary/planetary/planetary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'planetary-page',
    loadChildren: () =>
      import('./Planetary/planetary.module').then((m) => m.PlanetaryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
