// splash.page.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Navigate to the home page after 3 seconds
    setTimeout(() => {
      this.router.navigateByUrl('/welcome');
    }, 5000); // Adjust the time as needed
  }

}
