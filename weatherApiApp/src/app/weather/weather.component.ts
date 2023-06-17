import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})

export class WeatherComponent  {
  constructor(private weatherService: WeatherService) {}
  weatherData: any;
  temperature = '';
  city = '';
  country = '';
  humidity = '';
  description = '';
  icon = '';
  // this method use for get the weather data of  city given by menu bar ans search bar also 
  getWeathers() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.temperature = this.weatherData.main.temp;
        this.city = this.weatherData.name;
        this.country = this.weatherData.sys.country;
        this.humidity = this.weatherData.main.humidity;
        this.description = this.weatherData.weather[0].description;
        this.icon = this.weatherData.weather[0].icon;
  
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
