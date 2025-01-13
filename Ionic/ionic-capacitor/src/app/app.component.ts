import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  Platform
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  alarm,
  alert,
  apps,
  barcode,
  camera,
  chevronUp,
  clipboard,
  flashlight,
  folder,
  grid,
  logoFacebook,
  logoGoogle,
  move,
  navigate,
  notifications,
  phonePortrait,
  pin,
  pulse,
  save,
  share,
  trash,
  wifi,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonRouterLink,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Action Sheet', url: '/action-sheet', icon: 'chevron-up' },
    { title: 'App', url: '/app', icon: 'apps' },
    { title: 'Barcode Scanner', url: '/barcode-scanner', icon: 'barcode' },
    { title: 'Camera', url: '/camera', icon: 'camera' },
    { title: 'Clipboard', url: '/clipboard', icon: 'clipboard' },
    { title: 'Device Info', url: '/device', icon: 'phone-portrait' },
    { title: 'Dialogs', url: '/dialogs', icon: 'alert' },
    { title: 'Facebook Login', url: '/facebook-login', icon: 'logo-facebook' },
    { title: 'Filesystem', url: '/filesystem', icon: 'folder' },
    { title: 'Flashlight', url: '/flashlight', icon: 'flashlight' },
    { title: 'Geolocation', url: '/geolocation', icon: 'pin' },
    { title: 'Google Login', url: '/google-login', icon: 'logo-google' },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'notifications',
    },
    { title: 'Navigation', url: '/navigation', icon: 'navigate' },
    { title: 'Network', url: '/network', icon: 'wifi' },
    { title: 'Motion', url: '/motion', icon: 'move' },
    { title: 'Preferences', url: '/preferences', icon: 'save' },
    { title: 'Social sharing', url: '/share', icon: 'share' },
    { title: 'SQLite', url: '/sqlite', icon: 'grid' },
    { title: 'Toast', url: '/toast', icon: 'alarm' },
    { title: 'Vibration', url: '/vibration', icon: 'pulse' },
  ];

  #platform = inject(Platform);

  constructor() {
    addIcons({
      camera,
      pulse,
      clipboard,
      phonePortrait,
      folder,
      pin,
      notifications,
      alert,
      chevronUp,
      alarm,
      move,
      wifi,
      share,
      save,
      apps,
      navigate,
      logoFacebook,
      logoGoogle,
      flashlight,
      grid,
      barcode,
      trash,
    });

    this.initializeApp();
  }

  async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
      StatusBar.setBackgroundColor({ color: '#3880ff' });
      StatusBar.setStyle({ style: Style.Dark });
      GoogleAuth.initialize();
    }
  }
}
