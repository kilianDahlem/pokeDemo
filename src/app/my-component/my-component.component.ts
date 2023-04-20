import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPIServiceService } from '../poke-apiservice.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'], 
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent {
  id: string = '';
  selectedPokeId: string ='';
  searchPokeName: string ='';

  pokes: Pokemon[] = [];

  constructor(private pokeService: PokeAPIServiceService) {
    this.pokes.push(new Pokemon('1', 'Pikachu'));
    this.pokes.push(new Pokemon('2', 'Carapuce'));
    this.pokes.push(new Pokemon('3', 'Salamèche'));
    this.pokes.push(new Pokemon('4', 'Bulbizarre'));
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name));
      });
    }
    );
  }

  go(){
    console.log(this.selectedPokeId);
  }

}
