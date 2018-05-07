import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailStock } from '../DetailStock/detailstock';



@Component({
  selector: 'stockslist',
  templateUrl: 'stockslist.html'
})
export class StocksList implements OnInit {


  quoteList = [];
  run:Boolean;
  detailPage:any;

  constructor(public navCtrl: NavController,public http:Http) {

    //this.testfunction();
  }


  ngOnInit() {
// this.detailPage="DetailStock";

    this.getListSymbols();


  }




getListSymbols(){
  let url='https://api.iextrading.com/1.0/tops/last';

this.http.get(url).subscribe(res=>{

  if (res.ok){

  this.quoteList=res.json();
    //console.log(this.quoteList);
 
    //this.quoteList.push(res.json());
  }else{

    console.log("erro");

  }
});


}

getDetailsAboutStock(stockSymbol){
//  console.log(stockSymbol);


  let url='https://api.iextrading.com/1.0/stock/'+stockSymbol+'/batch?types=quote,news,chart&range=1m&last=10';

  this.http.get(url).subscribe(res=>{
    if(res.ok){
      this.navCtrl.push(DetailStock,{obj: res.json()

      });
     
    }else{
  
    console.log("fch tsna3");
  
    }
  
  
  });

  

 }

getBatchInformationsFunctionBySymbol (symbol) {

//  let  ApiKey = 'JKNYNGB7PCE3B0S8';
// let alphaVantageAPI = new AlphaVantageAPI(ApiKey, 'compact', true);

/*
  alphaVantageAPI.getDailyData('fb')
  .then(dailyData => {
      console.log("Daily data:");
      console.log(dailyData[0]);
  })
  .catch(err => {
      console.error(err);
  });
  */



}
}
