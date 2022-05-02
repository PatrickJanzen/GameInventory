import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomePage} from './home.page';
import {HomePageRoutingModule} from './home-routing.module';
import {GameListItemComponentModule} from '../game-list-item/game-list-item.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameListItemComponentModule,
    HomePageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
