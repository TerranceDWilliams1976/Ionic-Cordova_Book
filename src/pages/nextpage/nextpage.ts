import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ThirdpagePage } from '../thirdpage/thirdpage';

/**
 * Generated class for the NextpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nextpage',
  templateUrl: 'nextpage.html',
})
export class NextpagePage {

  constructor(public navCtrl: NavController, public modalCtr: ModalController) {

  }
  public onButtonClicked(): void {
    let modal = this.modalCtr.create(ThirdpagePage);
    modal.present();
  }
}