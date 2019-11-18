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
  providers: [MarkerService, TypeService],
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
  placeData: object = {};
  agmMapShow: boolean;

  constructor(private markerService: MarkerService, private typeService: TypeService, private router: Router) {
    this.markerData = {
      placeName: '',
      description: '',
      placeType: '',
      wheelChair: '',
    };
    this.agmMapShow = false;
  }

  ngOnInit() {
    this.zoom = 10;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.agmMapShow = true;
      });
    }

    this.getPlaceTypes();
    this.placeCreateForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      Description: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      Type: new FormControl('', [Validators.required]),
      WheelChair: new FormControl(''),
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
    if (!this.agmMapShow) {
      this.agmMapShow = true;
    }
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.addMarkerToMap(position.coords.latitude, position.coords.longitude, this.placeCreateForm.value.Name, this.placeCreateForm.value.Description, this.placeCreateForm.value.Type, this.placeCreateForm.value.WheelChair)
        this.placeCreateForm.reset();
      });
    }
  }

  addMarkerToMap(lat, lng, name, desc, type, wheelChair) {
    this.marker = {
      lat: lat,
      long: lng,
      name: name,
      description: desc,
      Type: type,
      WheelChair: wheelChair,
    }
    this.places.push(this.marker);
  }

  getPlaceTypes() {
    this.typeService.getAllTypes().subscribe((response) => {
      this.placeTypes = response;
      this.setUpdatedData();
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

  setUpdatedData(){
    const place = localStorage.getItem('place');
    this.placeData = place ? JSON.parse(place) : null;
    if (place) {
      let placeIndex;
      this.placeTypes.forEach((key, val) => {
        if( this.placeData['Type']['id'] === key.id ){
          placeIndex = val;
        }
      });
      this.markerData.placeName = this.placeData['name'];
      this.markerData.description = this.placeData['description'];
      this.markerData.placeType = placeIndex;
      this.addMarkerToMap(this.placeData['lat'], this.placeData['long'], this.placeData['name'], this.placeData['description'], this.placeData['Type']['id'], this.placeData['Type']['wheelChair']);
    }
  }

  submitRoute(type) {
    if (this.places.length !== 0) {
      this.places.forEach((placeObject) => {
        placeObject.Type = this.placeTypes[placeObject.Type];
      })
      if (type === 'create') {
        this.markerService.addMarkers(this.places).subscribe((response) => {
          if (response.length > 0) {
            this.router.navigate(['/places']);
          }
        }, error => {
          console.log('Please Try Again Later', error);
        });
      } else if (type === 'update') {
        this.places[0].id = this.placeData['id'];
        this.places[0].name = this.markerData.placeName;
        this.places[0].description = this.markerData.description;
        this.places[0].wheelChair = this.markerData.wheelChair;
        this.places[0].Type = this.placeTypes[parseInt(this.markerData.placeType.toString())];
        this.markerService.updateMarker(this.places).subscribe((response) => {
          if (parseInt({ ...{ ...response }.raw }.affectedRows) > 0) {
            this.router.navigate(['/places']);
          }
        }, error => {
          console.log('Please Try Again Later', error);
        });
      }
    } else {
      alert('Please Add markers');
    }
  }

}