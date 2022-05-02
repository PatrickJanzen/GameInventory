import {Injectable} from '@angular/core';
import {Game} from '../data/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public games: Game[] = [
    {
      id: 0,
      // eslint-disable-next-line max-len
      picture: 'https://cdn.rocketbay.net/assets/media/img/b/yxAAAOSwB1JgoNut/s-l1600/topwords-wortspiel-der-3-dimension-2002-hasbro-parker-scrabble-brettspiel-spiel.jpg',
      title: 'Topwords',
      ageFrom: 9,
      ageTo: null,
      playersFrom: 2,
      playersTo: 4,
      shelf: '1.a',
      description: null
    },
    {
      id: 1,
      picture: 'https://www.optikunde.de/farbe/image/rot.png',
      title: 'Test for space, and otherstuff!',
      ageFrom: 9,
      ageTo: null,
      playersFrom: 1,
      playersTo: null,
      description: 'jp',
      shelf: '7.c'
    }
  ];

  public getGames(filter: string): Game[] {
    if (filter !== '') {
      return this.games.filter(value => {
        return value.title.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return this.games;
  }

  getGameById(id: number) {
    return this.games.find(game => game.id === id);
  }

}
