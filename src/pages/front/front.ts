import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {Http} from '@angular/http';
import {HomePage} from '../home/home';
import {PythonPage} from '../python/python';
/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/assets/data.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.items;
      console.log(data);
   },
    err =>{
      console.log(err);
    })
}
 openNavDetailsPage(item) {
    switch (item) {
            case 'Data Structure':
            this.navCtrl.push(HomePage);
                break;
            case 'Python':
               this.navCtrl.push(PythonPage);
                break;
            default:

        }
  }
}
