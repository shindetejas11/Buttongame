import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCapitalComponent } from './country-capital/country-capital.component';
import { ClickDirectiveDirective } from './click-directive.directive';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';
import { RadiobutnComponent } from './radiobutn/radiobutn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryCapitalComponent,
    ClickDirectiveDirective,
    CircleBtnComponent,
    RadiobutnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
