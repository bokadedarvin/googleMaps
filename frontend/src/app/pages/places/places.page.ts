import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  providers: [MarkerService],
})
export class PlacesPage implements AfterViewInit {
  markers: any;

  constructor(private markerService: MarkerService, private router: Router) { }

  public places: Array<any>;
  ngAfterViewInit() {
    this.getMarkers();
  }

  getMarkers() {
    this.markerService.getMarkers().subscribe((response) => {
      this.markers = response;
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

  createMarker() {
    localStorage.removeItem('place');
    this.router.navigate(['/route-create']);
  }

  updateMarker(place) {
    localStorage.setItem('place', JSON.stringify(place));
    this.router.navigate(['/route-create']);
  }

  deleteMarker(markerId, markerIndex) {
    this.markerService.deletetMarker({ deleteId: markerId }).subscribe((response) => {
      if (parseInt({ ...{ ...response }.raw }.affectedRows) > 0) {
        if (parseInt(this.markers.length) > 1) {
          this.markers.splice(markerIndex, 1);
        } else {
          this.markers = [];
        }
      }
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }
}
