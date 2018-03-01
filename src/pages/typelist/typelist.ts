import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import{ProgramPage} from '../program/program';
/**
 * Generated class for the TypelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typelist',
  templateUrl: 'typelist.html',
})
export class TypelistPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/list.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.Typelist;
   },
    err =>{
      console.log(err);
    })
  }
  Next(){
    this.navCtrl.push(ProgramPage);
  }
}
