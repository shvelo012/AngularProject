import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-first',
  standalone: true,
  imports: [],
  templateUrl: './weather-first.component.html',
  styleUrl: './weather-first.component.scss'
})
export class WeatherFirstComponent {
  weatherFirstData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWeatherData().subscribe(data => {
      this.weatherFirstData = data;
    });
  }

}
