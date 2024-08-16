import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  constructor(private navCtrl: NavController) { } // Inject NavController

  ngOnInit() {}

  goBack() {
    this.navCtrl.back(); // Use NavController to navigate back
  }
  navigateToQuestions() {
    this.navCtrl.navigateForward('./questions'); // replace with your actual route
  }

  navigateToPdf() {
    this.navCtrl.navigateForward('./pdf'); // replace with your actual route
  }

}
