import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaryComponent } from './planetary.component';

describe('PlanetaryComponent', () => {
  let component: PlanetaryComponent;
  let fixture: ComponentFixture<PlanetaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
