import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.page.html',
  styleUrls: ['./route-create.page.scss'],
})
export class RouteCreatePage implements OnInit {
  placeCreateForm: FormGroup;
  
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  marker = {};
  places = []
  
  constructor(private router: Router) { }

  ngOnInit() { 
    this.zoom = 18;

    this.placeCreateForm = new FormGroup({
      Description: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      Type: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage(formControl) {
    let errorMessage;
    switch (formControl) {
      case 'Description':
        errorMessage = this.placeCreateForm.controls[formControl].hasError('pattern') ? 'Please enter valid description' : 'Please enter description';
        break;
      case 'Type':
        errorMessage = 'Please select route type';
        break;
    }

    return errorMessage;
  }

  addPlaces(){
    this.marker = {
      latitude : 28.946091,
      longitude : 77.718811,
      description : this.placeCreateForm.value.Description,
      type : this.placeCreateForm.value.Type,
    }
    this.places.push( this.marker );
    this.latitude = this.places[0].latitude;
    this.longitude = this.places[0].longitude;
    this.placeCreateForm.reset();
  }
  
  submitRoute(){//CALL SUBMIT API
    if( this.places.length !== 0 ){
      console.log(this.places);
      this.router.navigate(['/route-view']);
    }else{
      alert('Please Add markers');
    }
  }

}
