import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
   private viewCtrl: ViewController
   ) {
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
