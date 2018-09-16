import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtr: ModalController) {

  }
  public onButtonClicked(): void {
    let modal = this.modalCtr.create(NewpagePage);
    modal.present();
  }
}
