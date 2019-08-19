import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-view',
  templateUrl: './route-view.page.html',
  styleUrls: ['./route-view.page.scss'],
})
export class RouteViewPage implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  public latitude: number;
  public longitude: number;
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;
  public polylines: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.zoom = 12;
    this.maxSpeed = 40;
    this.latitude = 28.955317;
    this.longitude = 77.702681;

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
    this.polylines = this.rebuildPolylines();
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

}
