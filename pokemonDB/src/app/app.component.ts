import { Component } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokemonDB';
  public name: string;
}
