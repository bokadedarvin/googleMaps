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
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;
  public polylines: Array<any>;

  constructor(
    private mapsAPILoader: MapsAPILoader,
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 3;
    this.maxSpeed = 40;
    this.latitude = 21.291;
    this.longitude = -122.214;

    this.polyline = [
        {
            latitude:  39.8282,
            longitude: -98.5795,
            speed: 50
        },
         {
            latitude:  38.8282,
            longitude: -108.5795,
            speed: 50
        },
        {
            latitude: 37.772,
            longitude: -122.214,
            speed: 20
        },
        {
            latitude: 21.291,
            longitude: -157.821,
             speed: 20
        },
        {
            latitude: -18.142,
            longitude: 178.431,
            speed: 20
        },
        {
            latitude: -27.467,
            longitude: 153.027,
            speed: 25
        }
    ]
    this.polylines = this.rebuildPolylines();
 
    
    //set current position
    // this.setCurrentPosition();
    
    //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {

    // });
  }

  private rebuildPolylines() {
    let polylines = [];
    let i = 0;
    let newPolyline = {path: [], color: 'blue'};
    for (let point of this.polyline) {
      console.log(point)
      newPolyline.path.push(point);
      const speedChanged = this.polyline[i+1] && (point.speed < this.maxSpeed && this.polyline[i+1].speed < this.maxSpeed) ||(point.speed > this.maxSpeed && this.polyline[i+1].speed > this.maxSpeed )
      if (point.speed > this.maxSpeed) {
        newPolyline.color = 'red';
      }
      if (speedChanged) {
        newPolyline.path.push( this.polyline[i+1] );
        polylines.push(newPolyline);
        newPolyline = {path: [], color: 'blue'};
      }
      i++;
    }
    console.log(polylines);
    return polylines;
    
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
