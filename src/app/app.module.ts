import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';

import { AppComponent } from './app.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { UrlShortenerService } from './url.shortener.service';

@NgModule({
  declarations: [
    AppComponent,
    UrlFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shortLinks: appReducer }),
  ],
  providers: [UrlShortenerService],
  bootstrap: [AppComponent]
})
export class AppModule { }