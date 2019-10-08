import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MarkerService } from 'src/app/services/marker.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
  providers: [MarkerService],
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
  searchData:any;


  constructor(
    private markerService: MarkerService,
    private mapsAPILoader: MapsAPILoader,
    private typeService: TypeService
  ) {
    this.placeTypes = [];
    this.zoom; 
    this.latitude;
    this.longitude;
    this.searchData = {};
  }

  notEqualto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
      let input = control.value;
      
      let isValid=control.root.value[field_name]==input
      if(!isValid){
        return null;
      }
      else{
        return { 'equalTo': {isValid} }
      }
    };
  }

  ngOnInit() {
    //set google maps defaults
    this.getPlaceTypes();
    
    this.searchForm = new FormGroup({
      From: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      To: new FormControl('', [Validators.required, this.notEqualto('From')]),
    }); 
  } 

  getPlaceTypes() {
    this.typeService.getAllTypes().subscribe((response) => {
      this.placeTypes = response;
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

  getErrorMessage(formControl) {
    let errorMessage;
    switch (formControl) {
      case 'From':
        errorMessage = this.searchForm.controls[formControl].hasError('pattern') ? 'please select valid starting place' : 'please select starting place';
        break;
      case 'To':
          errorMessage = this.searchForm.controls[formControl].hasError('equalTo') ? 'Starting and destination place cant be same' : 'please select destination place';
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

  searchRoute(){
    this.searchData = {
      from: this.searchForm.value.From,
      to: this.searchForm.value.To,
      types: this.checked
    }
    this.markerService.getRoute(this.searchData).subscribe((response) => {
      if( response ){
        this.zoom = 12; 
        this.latitude = response[0].lat;
        this.longitude = response[0].long; 
        this.polyline = response; 
      }
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }
}
