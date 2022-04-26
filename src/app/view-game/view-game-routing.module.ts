import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewGamePage } from './view-game.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewGamePageRoutingModule {}
