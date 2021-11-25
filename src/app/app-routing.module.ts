import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-Game/update-game.component';

const routes: Routes = [
  {path: "games", component : GamesComponent},
  {path: "add-game", component : AddGameComponent},
  { path: "", redirectTo: "games", pathMatch: "full" },
  {path: "updateGame/:id", component: UpdateGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
