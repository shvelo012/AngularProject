import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFirstComponent } from './weather-first.component';

describe('WeatherFirstComponent', () => {
  let component: WeatherFirstComponent;
  let fixture: ComponentFixture<WeatherFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
