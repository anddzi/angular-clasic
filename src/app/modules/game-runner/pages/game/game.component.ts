import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  constructor(public socketService: SocketService) {}
  ngOnInit() {
    console.log('game-page');
    this.socketService.sendMessage('text');
  }
}
