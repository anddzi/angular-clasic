import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('chat-message-add', msg);
  }
  getMessage() {
    return this.socket.fromEvent('chat-message-add').pipe(map((data) => data));
  }
}
