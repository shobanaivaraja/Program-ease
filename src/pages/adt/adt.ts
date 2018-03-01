import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import{TypelistPage} from '../typelist/typelist';

/**
 * Generated class for the AdtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adt',
  templateUrl: 'adt.html',
})
export class AdtPage {

 data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/list.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.DS;
   },
    err =>{
      console.log(err);
    })
}
Next(){
	this.navCtrl.push(TypelistPage);
}
}
