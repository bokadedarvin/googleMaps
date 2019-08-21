import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  searchForm: FormGroup;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  placeTypes = [];

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
    this.zoom = 2; 
    this.latitude = 28.955317;
    this.longitude = 77.702681;  

    this.placeTypes = [
      {
        name : 'Cafeteria',
        value : 'cafeteria',
      },
      {
        name : 'Library',
        value : 'library',
      },
      {
        name : 'Class Room',
        value : 'classroom',
      },
      {
        name : 'Office',
        value : 'office',
      },
      {
        name : 'Play Ground',
        value : 'playground',
      },
    ]
    
    this.searchForm = new FormGroup({
      From: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      To: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
    }); 
  } 

  getErrorMessage(formControl) {
    let errorMessage;
    switch (formControl) {
      case 'From':
        errorMessage = this.searchForm.controls[formControl].hasError('pattern') ? 'Please enter valid From path' : 'Please enter From';
        break;
      case 'To':
        errorMessage = this.searchForm.controls[formControl].hasError('pattern') ? 'Please enter valid To path' : 'Please enter To';
        break;
    }
    return errorMessage;
  }

  checked = [];
  //Adds the checkedbox to the array and check if you unchecked it
  addCheckbox(event, checkbox : String) {  
    if ( event.detail.checked ) {
      this.checked.push(checkbox);
    } else {
      let index = this.removeCheckedFromArray(checkbox);
      this.checked.splice(index,1);
    }
  }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox : String) {
    return this.checked.findIndex((category)=>{
      return category === checkbox;
    })
  }

  //Empties array with checkedboxes
  emptyCheckedArray() {
    this.checked = [];
  } 

  searchData:any = {}
  searchRoute(){
    this.searchData = {
      from: this.searchForm.value.From,
      to: this.searchForm.value.To,
      types: this.checked
    }
    // this.commonService.post( '', this.userData );
    console.log(this.searchData); 

    this.zoom = 12; 
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
  }
}
