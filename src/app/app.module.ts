import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FilterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
