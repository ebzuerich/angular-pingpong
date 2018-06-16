import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../domain/message';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(private client: HttpClient) { }

  public ping() {
    return this.client.get<Message>('https://ebzuerich-simple-api.herokuapp.com/delayedping');
  }
}
