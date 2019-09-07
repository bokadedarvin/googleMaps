import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';
import { TypeService } from 'src/app/services/type.service';
import { PlaceData } from 'src/app/interface/place/place';

@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.page.html',
  styleUrls: ['./route-create.page.scss'],
  providers: [MarkerService,TypeService],
})
export class RouteCreatePage implements OnInit {
  placeCreateForm: FormGroup;
  markerData: PlaceData;

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  marker = {};
  places = [];
  placeTypes = [];

  constructor(private markerService: MarkerService , private typeService: TypeService, private router: Router ) {
    this.markerData = {
      placeName: '',
      description: '',
      placeType: '',
    };
  }

  ngOnInit() {

    this.zoom = 18;

    this.getPlaceTypes();
    this.placeTypes = [
      {
        name: 'Cafeteria',
        value: 'cafeteria',
      },
      {
        name: 'Library',
        value: 'library',
      },
      {
        name: 'Class Room',
        value: 'classroom',
      },
      {
        name: 'Office',
        value: 'office',
      },
      {
        name: 'Play Ground',
        value: 'playground',
      },
    ]
    this.placeCreateForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      Description: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      Type: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage(formControl) {
    let errorMessage;
    switch (formControl) {
      case 'Name':
        errorMessage = this.placeCreateForm.controls[formControl].hasError('pattern') ? 'Please enter valid name' : 'Please enter name';
        break;
      case 'Description':
        errorMessage = this.placeCreateForm.controls[formControl].hasError('pattern') ? 'Please enter valid description' : 'Please enter description';
        break;
      case 'Type':
        errorMessage = 'Please select route type';
        break;
    }

    return errorMessage;
  }

  addPlaces() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.marker = {
          latitude: this.latitude,
          longitude: this.longitude,
          name: this.placeCreateForm.value.Name,
          description: this.placeCreateForm.value.Description,
          type: this.placeCreateForm.value.Type,
        }
        this.places.push(this.marker);
        this.placeCreateForm.reset();
      });
    }

  }

  getPlaceTypes(){
    this.typeService.getAllTypes().subscribe((response)=>{
      console.log(response);
      // this.router.navigate(['/route-view']);
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

  submitRoute() {//CALL SUBMIT API
    if (this.places.length !== 0) {
      (Object.keys(this.places).length > 0) ? this.markerService.addMarkers(this.places).subscribe((response) => {
        console.log(response);
        // this.router.navigate(['/route-view']);
      }, error => {
        console.log('Please Try Again Later', error);
      }) : null;
    } else {
      alert('Please Add markers');
    }
  }

}