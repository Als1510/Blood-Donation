import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlooddonarPage } from './blooddonar.page';

const routes: Routes = [
  {
    path: '',
    component: BlooddonarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlooddonarPageRoutingModule {}
