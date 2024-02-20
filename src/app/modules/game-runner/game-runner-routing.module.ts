import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'start', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRunnerRoutingModule {}
