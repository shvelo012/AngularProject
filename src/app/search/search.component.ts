import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWeather('Tbilisi');
  }

  onEnter(Event: Event) {
    const target = Event.target as HTMLInputElement;
    this.dataService.getWeather(target.value);
  }

}
