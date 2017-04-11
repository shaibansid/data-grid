//core module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

//application module
import { DataGridModule } from './data-grid/data-grid.module';
//application component
import { AppComponent } from './app.component';
//application services
import { AppService } from './app.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // core module
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,

    // custom module
    DataGridModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
