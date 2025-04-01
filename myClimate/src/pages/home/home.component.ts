import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherResponse } from 'src/models/weather';
import { ClimateService } from 'src/service/climateService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  weatherData!: WeatherResponse;
  resultWeather: any;
  errorMessage: string | undefined;

  constructor(private climateService: ClimateService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }


  onSubmit(): void {
    const city = this.form.get('city')?.value;
    this.getWeatherData();
  }

  getWeatherData(): void {
    const cityName = this.form.get('city')?.value;

    if (!cityName) {
      console.error("Cidade inválida.");
      return;
    }

    this.climateService.getClimate(cityName).subscribe({
      next: (data) => {
        console.log("Dados,da clima recebido", data);
          this.resultWeather = data;
        this.errorMessage = ''
        console.log(this.resultWeather)
      },
      error: (error) => {
        console.error('Erro ao buscar dados do clima', error);
        this.errorMessage = 'Cidade não encontrada ou erro na API.';
        this.resultWeather = null;
      }
    });
  }
}

