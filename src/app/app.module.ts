import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardFakeComponent } from './shared/components/card-fake/card-fake.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    CardFakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
