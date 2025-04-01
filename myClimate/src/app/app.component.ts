import { Component } from '@angular/core';
import { ClimateService } from 'src/service/climateService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ///esta esta corereta
 /*constructor(private climateService: ClimateService) {}

  ngOnInit(): void {
    this.getWeatherData('butia'); // Passando o nome da cidade para consultar
  }

  getWeatherData(city: string): void {
    this.climateService.getClimate(city).subscribe(
      data => {
        console.log('Weather data:', data);
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }*/
}


