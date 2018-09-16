import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FourthpagePage } from '../fourthpage/fourthpage';

/**
 * Generated class for the ThirdpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thirdpage',
  templateUrl: 'thirdpage.html',
})
export class ThirdpagePage {

  constructor(public navCtrl: NavController, public modalCtr: ModalController) {

  }
  public onButtonClicked(): void {
    let modal = this.modalCtr.create(FourthpagePage);
    modal.present();
  }
}