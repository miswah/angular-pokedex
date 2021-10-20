import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexManagementService {
  constructor(private http: HttpClient) {}

  //fetching pokemon 3 at a time
  getPokemons() {
    return this.http.get(environment.pokeAPI + `pokemon?limit=3&offset=0`);
  }

  getNextPokemons(next: string) {
    return this.http.get(next);
  }
}
