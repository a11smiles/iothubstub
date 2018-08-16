import { Component } from '@angular/core';

import { Platform, Events, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Transmit',
      url: 'transmit',
      icon: 'code-working'
    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'settings'
    },
    {
      title: 'About',
      url: 'about',
      icon: 'information-circle'
    },
    {
      title: 'Report an Issue',
      url: 'issue',
      icon: 'bug'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private menuCtrl: MenuController,
    private configSvc: ConfigService
  ) {
    this.initializeApp();
    this.events.subscribe('menu:toggled', (action) => {
      if (action == 'close') {
        this.statusBar.show();
        this.menuCtrl.close();
      } else if (action == 'open') {
        this.statusBar.hide();
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }

  clickedOff() {
    this.events.publish('menu:toggled', 'close');
  }
}
