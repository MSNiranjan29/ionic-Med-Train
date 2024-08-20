import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router // Inject Router
  ) { }

  ngOnInit() {
    this.checkUserStatus();
  }

  async presentLoginAlert() {
    // Show the overlay
    document.body.classList.add('show-overlay');

    const alert = await this.alertController.create({
      header: 'Login for full Access',
      message: 'You need to Login First to read Notification.',
      buttons: [
        {
          text: 'Login Now',
          handler: () => {
            // Redirect to the contact page
            this.dismissOverlay();
            this.router.navigate(['/contact']); // Use Router to navigate
          },
        },
        {
          text: "I'll Login Later",
          role: 'cancel',
          cssClass: 'later-login',
          handler: () => {
            this.dismissOverlay();
          },
        },
      ],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }

  dismissOverlay() {
    // Hide the overlay
    document.body.classList.remove('show-overlay');
  }

  checkUserStatus() {
    const user = localStorage.getItem('user');
    console.log('User found in localStorage:', user); // Debugging line
    // Only show the alert if the user is not logged in
    if (!user) {
      this.showLoginAlertWithDelay();
    }
  }

  showLoginAlertWithDelay() {
    // Set a timeout to present the alert after 5 seconds
    setTimeout(() => {
      this.presentLoginAlert();
    }, 5000); // 5000 milliseconds = 5 seconds
  }
}
