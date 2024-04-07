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
    return this.httpClient
      .get<{ data: { games: Game[] } }>(url)
      .pipe(map((response) => response.data.games));
  }

  createGame(
    title: string,
    genre: string,
    developer: string,
    releaseYear: number,
    imageUrl: string,
    price: number,
    description: string,
    backgroundImage: string
  ) {
    const url = '/api/games';
    return this.httpClient.post<Game>(url, {
      title,
      genre,
      developer,
      releaseYear,
      imageUrl,
      price,
      description,
      backgroundImage,
    });
  }

  getGame(id: string) {
    const url = 'http://localhost:3000/api/games';
    return this.httpClient.get<Game>(`${url}/${id}`);
  }

  updateGame(
    gameId: string,
    title: string,
    genre: string,
    developer: string,
    releaseYear: Date,
    imageUrl: string,
    price: number,
    description: string,
    backgroundImage: string
  ) {
    return this.httpClient.put<Game>(`/api/games/${gameId}`, {
      gameId,
      title,
      genre,
      developer,
      releaseYear,
      imageUrl,
      price,
      description,
      backgroundImage,
    });
  }

  deleteGame(gameId: string) {
    return this.httpClient.delete<Game>(`/api/games/${gameId}`);
  }
}
