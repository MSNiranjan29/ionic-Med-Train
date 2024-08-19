import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: { name: string; email: string; phoneNumber: string } | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve user details from localStorage or a service
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  onLogout() {
    // Clear user data and navigate to login or home page
    localStorage.removeItem('user');
    this.router.navigate(['/contact']);
  }
}
