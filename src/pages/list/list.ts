import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { StackPage} from '../stack/stack';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  this.http.get("/assets/stack.json")
    .map(res => res.json())
    .subscribe(data =>
    {
      this.data=data.stack;
   },
    err =>{
      console.log(err);
    })
  }
  Next(){
    this.navCtrl.push(StackPage);
  }
  
}
