import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent} from "./pages/main-page/main-page.component";
import { PlayerPageComponent } from "./pages/player-page/player-page.component";
import {ChannelPageComponent} from "./pages/channel-page/channel-page.component";
import {PlaylistPageComponent} from "./pages/playlist-page/playlist-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'player', component: PlayerPageComponent},
  {path: 'channel', component: ChannelPageComponent},
  {path: 'playlist', component: PlaylistPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
