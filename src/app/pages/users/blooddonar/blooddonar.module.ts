import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlooddonarPageRoutingModule } from './blooddonar-routing.module';

import { BlooddonarPage } from './blooddonar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlooddonarPageRoutingModule
  ],
  declarations: [BlooddonarPage]
})
export class BlooddonarPageModule {}
