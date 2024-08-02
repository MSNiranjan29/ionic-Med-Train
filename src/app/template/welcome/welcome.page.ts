import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  // Inject Router into the constructor
  constructor(private router: Router) { }

  ngOnInit() {
    // Initialization logic can go here
  }

  // Define the signup method outside of ngOnInit
  signup() {
    this.router.navigate(['/loginpage']);  // Use the router to navigate
  }
}
