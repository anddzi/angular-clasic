import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRunnerRoutingModule } from './game-runner-routing.module';
import { StartComponent } from './pages/start/start.component';
import { GameComponent } from './pages/game/game.component';


@NgModule({
  declarations: [
    StartComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRunnerRoutingModule
  ]
})
export class GameRunnerModule { }
