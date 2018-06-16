import { Component, OnInit } from '@angular/core';
import { PingService } from './services/ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(public pingService: PingService) { }

  public ngOnInit(): void {
    console.log(this.pingService.ping());
  }
}
