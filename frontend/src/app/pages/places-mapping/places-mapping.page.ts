import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';
import { MappingService } from 'src/app/services/mapping.service';

@Component({
  selector: 'app-places-mapping',
  templateUrl: './places-mapping.page.html',
  styleUrls: ['./places-mapping.page.scss'],
})
export class PlacesMappingPage implements OnInit {
  placeMappingForm: FormGroup;
  markers: any;
  remainingMarkers:any;

  constructor(private markerService: MarkerService,private mappingService: MappingService, private router: Router) { }

  public places: Array<any>;
  ngOnInit() {
    this.getMarkers();
    this.placeMappingForm = new FormGroup({
      FromPlace: new FormControl('', [Validators.required]),
      ToPlace: new FormControl('', [Validators.required]),
    });
  }

  getMarkers() {
    this.markerService.getMarkers().subscribe((response) => {
      this.markers = response;
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

  selectedPlace(event){
    this.remainingMarkers = [];
    this.markers.forEach((key, val) => {
      if( key.id !== parseInt(event.detail.value) ){
        this.remainingMarkers.push( key );
      }
    });
  }
  submitPlaceMapping() {
    const placeMap = {
      fromPlace : this.placeMappingForm.controls.FromPlace.value,
      toPlace : this.placeMappingForm.controls.ToPlace.value
    }
    this.mappingService.submitMapping(placeMap).subscribe((response) => {
      if (parseInt({ ...{ ...response }.raw }.affectedRows) > 0) {
        this.router.navigate(['/home']);
      }
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }
}

