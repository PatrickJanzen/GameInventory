import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import {TranslateService} from '@ngx-translate/core';
import {Game} from '../data/game';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public searchField: FormControl;

  constructor(private data: DataService, private translate: TranslateService) {
    this.searchField = new FormControl('');
    translate.setDefaultLang('de');
    translate.use('de');
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getGames(): Game[] {
    return this.data.getGames(this.searchField.value);
  }

  filter(event) {

  }
}
