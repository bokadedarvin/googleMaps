import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {

  constructor(private router: Router) {}
  public appPages = [];
  ngOnInit() {
    
    let adminPages = [
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
      {
        title: 'Mapping',
        url: '/places-mapping',
        icon: 'git-merge'
      }
    ]
    let userPages = [
      {
        title: 'Dashboard',
        url: '/user-dashboard',
        icon: 'speedometer'
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
      }
    ]
    if(JSON.parse( localStorage.getItem('userData') )[0].Role.roleName == 'customer'){
      this.appPages = userPages;
    }else{
      this.appPages = adminPages;
    }
  }

  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
