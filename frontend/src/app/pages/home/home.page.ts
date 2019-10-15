import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [MarkerService],
})
export class HomePage implements OnInit {
  markers: any;
  public places: Array<any>;
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
    private markerService: MarkerService,
    private mapsAPILoader: MapsAPILoader,
  ) {}

  ngOnInit() {
    this.getAdminDashboard();
    //set google maps defaults
    this.zoom = 10; 
  } 

  getAdminDashboard() {
    this.markerService.getAdminDashboard().subscribe((response) => {
      this.markers = response.markers[0];
      this.latitude = response.markers[0][0].lat;
      this.longitude = response.markers[0][0].long; 
      this.noOfUsers = response.users[1]; 
      this.noOfMarkers = response.markers[1]; 
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

}
