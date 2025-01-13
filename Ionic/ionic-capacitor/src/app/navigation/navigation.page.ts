import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import {
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { StartNavigation } from 'capacitor-start-navigation';
import { GaAutocompleteDirective } from '../ol-maps/ga-autocomplete.directive';
import { OlMapDirective } from '../ol-maps/ol-map.directive';
import { OlMarkerDirective } from '../ol-maps/ol-marker.directive';
import { SearchResult } from '../ol-maps/search-result';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonFab,
    IonFabButton,
    FormsModule,
    OlMapDirective,
    OlMarkerDirective,
    GaAutocompleteDirective
  ],
})
export class NavigationPage {
  coords = signal<[number, number]>([-0.5, 38.5]);

  validInputId = false;

  @ViewChild(IonSearchbar) searchBar!: IonSearchbar;

  constructor() {
    this.getPosition();
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords.set([coordinates.coords.longitude, coordinates.coords.latitude])
  }

  startNavigation() {
    StartNavigation.launchMapsApp({
      latitude: this.coords()[1],
      longitude: this.coords()[0],
      name: 'Directions example',
    });
  }

  changePlace(result: SearchResult) {
    this.coords.set(result.coordinates);
  }
}
