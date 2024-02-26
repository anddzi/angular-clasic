import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public socketId: string = '';

  constructor(private socket: Socket) {}

  async init() {
    console.log('service working');
    this.socket.on('set-socket-id', (id: string) => {});
    return 'ok';
  }

  sendMessage(msg: string) {
    this.socket.emit('chat-message-add', msg);
  }
  getMessage() {
    return this.socket.fromEvent('chat-message-add').pipe(map((data) => data));
  }
}
