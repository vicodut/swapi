import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from './swapi.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SwapiService
  ]
})
export class ServicesModule { }
