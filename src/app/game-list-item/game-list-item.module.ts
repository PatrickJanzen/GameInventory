import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {GameListItemComponent} from './game-list-item.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, TranslateModule],
  declarations: [GameListItemComponent],
  exports: [GameListItemComponent]
})
export class GameListItemComponentModule {
}
