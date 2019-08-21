import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {

  constructor() { }
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Places',
      url: '/places',
      icon: 'navigate'
    },
    // {
    //   title: 'Route Create',
    //   url: '/route-create',
    //   icon: 'navigate'
    // },
    // {
    //   title: 'Route View',
    //   url: '/route-view',
    //   icon: 'eye'
    // },
    {
      title: 'Logut',
      url: '/login',
      icon: 'log-out'
    }
  ];
  ngOnInit() {}

}
