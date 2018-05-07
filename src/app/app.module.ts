import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StocksList } from '../pages/stocks/stockslist';
import { StocksProvider } from '../providers/stocksprovider';
import { DetailStock } from '../pages/DetailStock/detailstock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StocksList,
    DetailStock

  ],
  imports: [
  
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StocksList,
    DetailStock

  ],
  providers: [
    StatusBar,
    SplashScreen,
    StocksProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
