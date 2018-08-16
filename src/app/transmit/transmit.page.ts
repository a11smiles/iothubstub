import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-transmit',
  templateUrl: './transmit.page.html',
  styleUrls: ['./transmit.page.scss'],
})
export class TransmitPage implements OnInit {

  public config;

  constructor(
    private events: Events,
    private configSvc: ConfigService
  ) {

  }

  ngOnInit() {
    this.configSvc.config.subscribe((config:object) => {
      this.config = config;
    });
  }

  menuButtonClick() {
    this.events.publish('menu:toggled', 'open');
  }
}
