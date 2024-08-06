import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { } // Inject Router

  ngOnInit() { 
    console.log("Menu Items");
  }

  toggleSubmenu(event: Event, section: string) {
    const arrowIcon = (event.currentTarget as HTMLElement);
    const submenu = arrowIcon.parentElement?.nextElementSibling as HTMLElement;

    if (submenu) {
      submenu.classList.toggle('show');
      arrowIcon.classList.toggle('rotated');
    }
  }

  navigateToSearch() {
    this.router.navigate(['/search']); // Navigate to the search page
  }

  navigateToNavigation() {
    this.router.navigate(['/notification']); // Adjust the path as needed
  }
}
