import { Component } from '@angular/core';
import { PokedexManagementService } from './services/pokedex-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public next: string = '';

  constructor(private pokedexService: PokedexManagementService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokedexService.getPokemons().subscribe((data: any) => {
      this.next = data.next;
      console.log(data.results);
      this.pokedexService.getNextPokemons(this.next).subscribe((data: any) => {
        this.next = data.next;
        console.log(data.results);
        this.pokedexService
          .getNextPokemons(this.next)
          .subscribe((data: any) => {
            console.log(data.results);
          });
      });
    });
  }
}
