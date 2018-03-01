import {Http} from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {

 data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/list.json")
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
	this.navCtrl.push(ProgramPage);
}
}
