import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor() { }

  public ping() {
    return 'pong';
  }
}
