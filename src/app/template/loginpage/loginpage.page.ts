import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Hello World");
  }

  onSignUp() {
    // Navigate to the create-an-account page
    this.navCtrl.navigateForward('/create-an-account');
  }

}
