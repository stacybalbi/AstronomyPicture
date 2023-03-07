import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PlanetaryModule } from './page/Planetary/planetary.module';
import { HomeModule } from './page/Home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../Core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PlanetaryModule,
    HomeModule,
    HttpClientModule
  ],
})
export class FeaturesModule {}
