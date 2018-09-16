import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NextpagePage } from '../nextpage/nextpage';



/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage {

  constructor(public navCtrl: NavController, public modalCtr: ModalController) {

  }
  public onButtonClicked(): void {
    let modal = this.modalCtr.create(NextpagePage);
    modal.present();
  }
}
