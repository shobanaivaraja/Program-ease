import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { StackprogramPage} from '../stackprogram/stackprogram';
/**
 * Generated class for the StackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stack',
  templateUrl: 'stack.html',
})
export class StackPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
 
    this.http.get("/assets/stack.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.operations;
   },
    err =>{
      console.log(err);
    })
  }
  Next(){
    this.navCtrl.push(StackprogramPage);
  }
  

}
