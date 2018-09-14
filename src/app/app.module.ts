import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailDisplayComponent } from './detail-display/detail-display.component';

import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
@NgModule({
  declarations: [
    AppComponent,
    DetailDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
