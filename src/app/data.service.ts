import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  private apiKey = '435710f7043db1b4998214aa71d922ab';
  weatherData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }
  getWeather(city: string) {
    const url = `/api/current?access_key=${this.apiKey}&query=${city}&units=m`;
    this.http.get(url).subscribe((data) => {
      this.weatherData.next(data);
    });
  }

  getWeatherData() {
    return this.weatherData;
  }
}
