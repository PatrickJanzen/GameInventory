import { Component } from '@angular/core';
import {DataService, Game} from '../services/data.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private translate: TranslateService) {
    translate.setDefaultLang('de');
    translate.use('de');
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getGames(): Game[] {
    return this.data.getGames();
  }

}
