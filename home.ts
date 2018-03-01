import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {ListPage} from '../list/list'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  url:any;

  constructor(public navCtrl: NavController, public http:Http) {
  
  
  	this.http.get("/assets/data.json")
  	.map(res => res.json())
  	.subscribe(data =>
  	{
  		this.data=data.result;
  		console.log("data:"+JSON.stringify(data.result));
 	},
  	err =>{
  		console.log(err);
  	})
  }

  Next(){
    this.navCtrl.push(ListPage);
 

  }
}