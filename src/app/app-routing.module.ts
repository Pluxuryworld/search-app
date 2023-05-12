import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent} from "./pages/main-page/main-page.component";
import { PlayerPageComponent } from "./pages/player-page/player-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'player', component: PlayerPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
