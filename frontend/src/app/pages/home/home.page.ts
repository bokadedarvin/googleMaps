import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  public latitude: number;
  public longitude: number; 
  public zoom: number; 
  public noOfUsers: number; 
  public noOfMarkers: number; 
  public polyline: Array<any>;

  constructor(
    private mapsAPILoader: MapsAPILoader,
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 10; 
    this.latitude = 28.955317;
    this.longitude = 77.702681; 
    this.noOfUsers = 15; 
    this.noOfMarkers = 89; 

    this.polyline = [
      {
          latitude:  28.955317,
          longitude: 77.702681,
          speed: 50
      },
       {
          latitude:  28.955217,
          longitude: 77.702481,
          speed: 50
      },
      {
          latitude: 28.986454,
          longitude: 77.683607,
          speed: 20
      },
      {
          latitude: 28.998466,
          longitude: 77.660271,
           speed: 20
      },
      {
          latitude: 29.020867,
          longitude: 77.669704,
          speed: 20
      },
      {
          latitude: 29.027922,
          longitude: 77.645167,
          speed: 25
      }
  ]
  } 

}
