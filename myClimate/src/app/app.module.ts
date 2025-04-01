import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ButtonModule } from 'src/components/button/button.module';
import { HttpClientModule } from '@angular/common/http';
import { ClimateService } from 'src/service/climateService.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClimateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
