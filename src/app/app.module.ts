import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewpagePage } from '../pages/newpage/newpage';
import { NextpagePage} from '../pages/nextpage/nextpage';
import { ThirdpagePage } from '../pages/thirdpage/thirdpage';
import { FourthpagePage } from '../pages/fourthpage/fourthpage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewpagePage,
    NextpagePage,
    ThirdpagePage,
    FourthpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewpagePage,
    NextpagePage,
    ThirdpagePage,
    FourthpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
