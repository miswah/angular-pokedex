import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from '../pokemon-list.service';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  types;
  id;
  pokemon;
  sprites;
  abilities;

  stats;
  constructor(
    private route: ActivatedRoute,
    private pokedex: PokemonListService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.id = p.get('id');
      this.pokedex.getDetails(this.id).subscribe((r) => {
        this.pokemon = r;

        this.sprites = this.pokemon.sprites;
        this.abilities = this.pokemon.abilities;
        this.types = this.pokemon.types;
        this.stats = this.pokemon.stats;
        // console.log(this.pokemon);
      });
    });
  }
}
