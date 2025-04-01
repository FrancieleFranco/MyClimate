import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WeatherResponse } from 'src/models/weather';
import { ClimateService } from 'src/service/climateService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  weatherData!: WeatherResponse;
  resultWeather: any;
  errorMessage: string | undefined;

  temperature: number | null = null;
  cityFound: string | null | undefined;
  messageTemperature: string = '';

  constructor(private climateService: ClimateService, private fb: FormBuilder) {
    this.form = this.fb.group({
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.getWeatherData();
  }

  getWeatherData(): void {
    const cityName = this.form.get('city')?.value;

    if (!cityName) {
      console.error('Cidade inválida.');
      return;
    }

    this.climateService.getClimate(cityName).subscribe({
      next: (data) => {
        console.log('Dados,da clima recebido', data);
        this.resultWeather = data;
        this.errorMessage = '';
        console.log(this.resultWeather);
        this.temperature = this.resultWeather.main.temp;
        this.cityFound = this.resultWeather.name;

        this.setMessage();
      },
      error: (error) => {
        console.error('Erro ao buscar dados do clima', error);
        this.errorMessage = 'Cidade não encontrada';
        this.resultWeather = null;
      },
    });
  }
  setMessage(): void {
    if (this.temperature !== null) {
      if (this.temperature < 10) {
        this.messageTemperature =
          'Está muito frio! Vista um casaco bem quente. ❄️🧥';
      } else if (this.temperature >= 10 && this.temperature < 20) {
        this.messageTemperature =
          'O tempo está fresco, melhor levar um agasalho. 🌬️🧣';
      } else if (this.temperature >= 20 && this.temperature < 30) {
        this.messageTemperature =
          'O clima está agradável, aproveite o dia! ☀️😎';
      } else if (this.temperature >= 30 && this.temperature < 40) {
        this.messageTemperature = 'Está bem quente! Beba bastante água. 💦🔥';
      } else {
        this.messageTemperature =
          'Calor extremo! Evite sair no sol e se hidrate bem. 🌡️🥵';
      }
    }
  }
}
