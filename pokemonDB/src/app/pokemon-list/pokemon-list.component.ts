import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '../pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemon: any;

  moreData: any[] = [];
  isPrevious = false;

  constructor(private pokedex: PokemonListService) {}

  ngOnInit(): void {
    this.pokedex.getPokemon().subscribe((r) => {
      this.pokemon = r;
      this.getPoke();
    });
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if (this.pokemon.previous != null) {
      this.isPrevious = true;
    } else {
      this.isPrevious = false;
    }
  }

  getPoke() {
    this.moreData = [];

    return this.pokemon.results.forEach((element) => {
      this.pokedex.getMoreData(element.name).subscribe((r) => {
        this.moreData.push(r);
      });
    });
  }

  nextLink() {
    this.pokedex.getLink(this.pokemon.next).subscribe((r) => {
      this.pokemon = r;
      this.getPoke();
    });
  }

  previousLink() {
    this.pokedex.getLink(this.pokemon.previous).subscribe((r) => {
      this.pokemon = r;
      this.getPoke();
    });
  }
}
