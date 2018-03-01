import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import { ListsPage } from '../lists/lists';

/**
 * Generated class for the StackAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stack-app',
  templateUrl: 'stack-app.html',
})
export class StackAppPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/stack.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.application;
   },
    err =>{
      console.log(err);
    })
  }
  Next(){
    this.navCtrl.push(ListsPage);
  }
  
}
