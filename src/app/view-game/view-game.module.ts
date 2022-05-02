import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewGamePage } from './view-game.page';

import { IonicModule } from '@ionic/angular';

import { ViewGamePageRoutingModule } from './view-game-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewGamePageRoutingModule,
    TranslateModule
  ],
  declarations: [ViewGamePage]
})
export class ViewGamePageModule {}
