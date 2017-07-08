import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserHomePage } from './user-home';

@NgModule({
  declarations: [
    UserHomePage,
  ],
  imports: [
    IonicPageModule.forChild(UserHomePage),
  ],
  exports: [
    UserHomePage
  ]
})
export class UserHomePageModule {}
