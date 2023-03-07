import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetaryRoutingModule } from './planetary-routing.module';
import { PlanetaryComponent } from './planetary/planetary.component';

@NgModule({
  declarations: [PlanetaryComponent],
  imports: [CommonModule, PlanetaryRoutingModule],
})
export class PlanetaryModule {}
