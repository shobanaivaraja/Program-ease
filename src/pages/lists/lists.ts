import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {Http} from '@angular/http';
import {AdtPage} from '../adt/adt';
import {HomePage} from '../home/home';
/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

data:any;
types1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/list.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.List;
   },
    err =>{
      console.log(err);
    })
  	this.http.get("/assets/list.json")
    .map(res => res.json())
    .subscribe(types1 =>
    {
      this.types1=types1.ListType;
   },
    err =>{
      console.log(err);
    })
}
    Next(){
    this.navCtrl.push(AdtPage);
  }

  	Home(){
    this.navCtrl.push(HomePage);
  }
}
