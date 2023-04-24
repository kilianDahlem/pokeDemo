import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeDetail } from '../pokemon';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'], 
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokeId: string ='';
  searchPokeName: string ='';
  pokes: Pokemon[] = [];
  pokeDetail: PokeDetail | undefined;

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfo: PokeShareInfoService) {
  
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name)); //e.url ??
      });
    }
    );
  }

  go(){
    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => {
        this.pokeDetail = data;
        this.pokeShareInfo.setValue(this.selectedPokeId);
      });
    };
  }

}
