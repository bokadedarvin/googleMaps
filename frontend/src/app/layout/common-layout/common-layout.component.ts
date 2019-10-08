import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {

  constructor(private router: Router) {}
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/user-dashboard',
      icon: 'speedometer'
    },
    {
      title: 'Places',
      url: '/places',
      icon: 'navigate'
    },
    {
      title: 'Mapping',
      url: '/places-mapping',
      icon: 'git-merge'
    },
    {
      title: 'User History',
      url: '/user-history',
      icon: 'stats'
    },
    {
      title: 'Feedback & Review',
      url: '/feedback',
      icon: 'chatboxes'
    },
    {
      title: 'FAQs',
      url: '/faqs',
      icon: 'help-circle'
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
    // {
    //   title: 'Log-Out',
    //   url: '/login',
    //   icon: 'log-out'
    // }
  ];
  ngOnInit() {}

  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
