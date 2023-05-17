import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ContentComponent } from './components/content/content.component';
import { VideoComponent } from './components/video/video.component';
import { PlayerPageComponent} from './pages/player-page/player-page.component';
import { MainPageComponent} from "./pages/main-page/main-page.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PlayerComponent} from "./components/player/player.component";
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ChannelComponent } from './components/channel/channel.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ContentComponent,
    VideoComponent,
    MainPageComponent,
    PlayerPageComponent,
    PlayerComponent,
    PlaylistComponent,
    ChannelComponent,
    PlaylistPageComponent,
    ChannelPageComponent

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

