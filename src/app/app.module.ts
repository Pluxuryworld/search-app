import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ContentComponent } from './components/content/content.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { PlayerPageComponent} from './pages/player-page/player-page.component';
import { MainPageComponent} from "./pages/main-page/main-page.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ContentComponent,
    SearchItemComponent,
    MainPageComponent,
    PlayerPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

