import { Component, OnInit } from '@angular/core';
import { Planetary } from 'src/app/Core/models/planetary.models';
import { PlanetaryService } from 'src/app/Services/Planetary/planetary.service';

@Component({
  selector: 'app-planetary',
  templateUrl: './planetary.component.html',
  styleUrls: ['./planetary.component.scss'],
})
export class PlanetaryComponent implements OnInit {
  planetary!: Planetary[];

  constructor(private planetaryService: PlanetaryService) {}

  ngOnInit(): void {
    this.getplanetary();
  }

  getplanetary() {
    this.planetaryService.list().subscribe(({ data }: any) => {
      this.planetary = data;
    });
  }
}
