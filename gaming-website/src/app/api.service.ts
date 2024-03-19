import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './types/game';
import { map, Observable, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // getAllGames(): Observable<Game[]> {
  //   const url = 'http://localhost:3000/api'
  //   return this.httpClient.get<{[key: string]: Game}>(`${url}/games`).pipe(
  //     map(response => {
  //       return Object.values(response);
  //     })
  //   );
  // }

  getAllGames(): Observable<Game[]> {
    const url = 'http://localhost:3000/api/games';
    return this.httpClient.get<{data: { games: Game[] }}>(url).pipe(
      map(response => response.data.games) 
    );
  }
}
