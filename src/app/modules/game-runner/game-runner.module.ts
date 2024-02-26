import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { GameRunnerRoutingModule } from './game-runner-routing.module';
import { StartComponent } from './pages/start/start.component';
import { GameComponent } from './pages/game/game.component';
import { SocketService } from './services/socket.service';

export function initializeApp(socketService: SocketService) {
  return (): Promise<any> => {
    return socketService.init();
  };
}

@NgModule({
  declarations: [StartComponent, GameComponent],
  imports: [CommonModule, GameRunnerRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SocketService],
      multi: true,
    },
  ],
})
export class GameRunnerModule {
  constructor() {}
}
