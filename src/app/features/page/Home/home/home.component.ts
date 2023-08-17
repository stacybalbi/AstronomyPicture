import { Component, OnInit } from '@angular/core';
import { Planetary } from 'src/app/Core/models/planetary.models';
import { PlanetaryService } from 'src/app/Services/Planetary/planetary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  planetary: Planetary = {
    explanation: '',
    title: '',
    url: '',
    date: '',
  };

  constructor(private planetaryService: PlanetaryService) {}

  ngOnInit(): void {
    this.getplanetary();
  }

  getplanetary() {
    this.planetaryService.list().subscribe((data: Planetary) => {
      this.planetary = data;
    });
  }

}
