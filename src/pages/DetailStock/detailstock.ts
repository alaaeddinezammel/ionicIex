import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
@Component({
  selector: 'detailstock',
  templateUrl: 'detailstock.html'
})
export class DetailStock implements OnInit {


  quoteList = [];
   obj;

  constructor(public navCtrl: NavController,public navParams: NavParams,public http:Http) {
   // this.obj=this.navParams.get('obj');

    //this.testfunction();
  }


  ngOnInit() {
 this.obj=this.navParams.get('obj');

console.log(this.obj);
  }



  goBack() {
    this.navCtrl.pop();
  }





}

