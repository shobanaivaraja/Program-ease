  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { StackAppPage } from '../stack-app/stack-app';


/**
 * Generated class for the StackprogramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stackprogram',
  templateUrl: 'stackprogram.html',
})
export class StackprogramPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/stack.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.program;
   },
    err =>{
      console.log(err);
    })
  }
  Next(){
  	this.navCtrl.push(StackAppPage);
  }
}
