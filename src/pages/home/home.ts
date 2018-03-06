import { Component } from '@angular/core';
import { NavController,ModalController,NavParams } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
  public modalCtrl: ModalController) {

  }

  openModal(){
  	let event = this.modalCtrl.create(EventPage);
  	event.present();
  }

}
