import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
/**
 * Generated class for the Python2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-python2',
  templateUrl: 'python2.html',
})
export class Python2Page {

  
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
       this.http.get("/assets/python.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.part3;
   },
    err =>{
      console.log(err);
    })
}
Next(){
	this.navCtrl.push(Python2Page);
}}