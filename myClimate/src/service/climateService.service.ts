import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '45f8d6a48ac2279c8954243037bb47b8';

  constructor(private http: HttpClient) { }

  getClimate(city: string, countryCode?: string): Observable<WeatherResponse> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt`;
    return this.http.get<WeatherResponse>(url);
  }}


