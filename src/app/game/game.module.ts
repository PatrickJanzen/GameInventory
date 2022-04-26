import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GameComponent } from './game.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, TranslateModule],
  declarations: [GameComponent],
  exports: [GameComponent]
})
export class GameComponentModule {}
