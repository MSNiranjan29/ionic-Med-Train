import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    // Call the method to present the alert after a delay
    this.showLoginAlertWithDelay();
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
            // Handle login action
            console.log('Login Now clicked');
            this.dismissOverlay();
          },
        },
        {
          text: "I'll Login Later",
          role: 'cancel',
          cssClass: 'later-login',
          handler: () => {
            console.log('Login Later clicked');
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

  showLoginAlertWithDelay() {
    // Set a timeout to present the alert after 5 seconds
    setTimeout(() => {
      this.presentLoginAlert();
    }, 5000); // 5000 milliseconds = 5 seconds
  }
}
