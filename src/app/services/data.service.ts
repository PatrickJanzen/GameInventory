import {Injectable} from '@angular/core';

export interface Game {
  id: number;
  picture: string | null;
  title: string;
  description: string | null;
  shelf: string | null;
  playersFrom: number;
  playersTo: number | null;
  ageFrom: number;
  ageTo: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public games: Game[] = [];
  public sgames: Game[] = [
    {
      id: 0,
      picture: null,
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
      picture: null,
      title: 'Test',
      ageFrom: 9,
      ageTo: null,
      playersFrom: 1,
      playersTo: null,
      description: 'jp',
      shelf: '7.c'
    }
  ];

  constructor() {}

  public getGames(): Game[] {
    return this.games;
  }

  getGameById(id: number) {
    return this.games[id];
  }

}
