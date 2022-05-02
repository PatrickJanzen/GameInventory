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
