import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-archived-courses',
  templateUrl: './archived-courses.page.html',
  styleUrls: ['./archived-courses.page.scss'],
})
export class ArchivedCoursesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Courses");
  }

  goBack() {
    this.navCtrl.back();
  }

}
