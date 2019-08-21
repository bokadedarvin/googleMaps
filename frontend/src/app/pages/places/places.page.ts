import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  constructor() { }

  public places: Array<any>;
  ngOnInit() {
    this.places = [
      {
        name: 'place1',
        description: 'place1 description',
        placeType: 'Class Room'
      },
      {
        name: 'place2',
        description: 'place1 description',
        placeType: 'Cafe'
      },
      {
        name: 'place3',
        description: 'place3 description',
        placeType: 'Auditorium'
      },
      {
        name: 'place4',
        description: 'place4 description',
        placeType: 'Library'
      },
      {
        name: 'place5',
        description: 'place5 description',
        placeType: 'Staff Room'
      },
      {
        name: 'place6',
        description: 'place6 description',
        placeType: 'Playground'
      },
      {
        name: 'place7',
        description: 'place7 description',
        placeType: 'Library'
      },
      {
        name: 'place8',
        description: 'place8 description',
        placeType: 'Staff Room'
      },
      {
        name: 'place9',
        description: 'place9description',
        placeType: 'Class Room'
      },
      {
        name: 'place10',
        description: 'place11 description',
        placeType: 'Class Room'
      }
    ]
  }

}
