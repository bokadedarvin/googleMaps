import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  providers: [MarkerService],
})
export class PlacesPage implements OnInit {
  markers: any;

  constructor(private markerService: MarkerService,private router: Router) { }

  public places: Array<any>;
  ngOnInit() {
    this.getMarkers();
  }

  getMarkers(){
    this.markerService.getMarkers().subscribe((response)=>{
      this.markers = response;
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

  createMarker(){
    localStorage.removeItem('place');
    this.router.navigate(['/route-create']);
  }

  updateMarker(place){
    localStorage.setItem('place',JSON.stringify(place));
    this.router.navigate(['/route-create']);
  }

  deleteMarker(markerId){
    this.markerService.deletetMarker(markerId).subscribe((response)=>{
      this.markers = response;
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }
}
