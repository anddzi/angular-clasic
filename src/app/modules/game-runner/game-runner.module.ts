import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//
import { GameRunnerRoutingModule } from './game-runner-routing.module';
import { StartComponent } from './pages/start/start.component';
import { GameComponent } from './pages/game/game.component';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [StartComponent, GameComponent],
  imports: [
    CommonModule,
    GameRunnerRoutingModule,
    SocketIoModule.forRoot(config),
  ],
})
export class GameRunnerModule {}
