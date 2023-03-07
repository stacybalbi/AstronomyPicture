import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planetary } from 'src/app/Core/models/planetary.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetaryService extends BaseService<Planetary> {
  
  constructor(protected override http: HttpClient) {
    super(
      http,
      `planetary/apod?api_key=oKfcZnhF6bUPwnujAWJlUwYnT1T4hS2wiPslo4xl`
    );
  }
}
