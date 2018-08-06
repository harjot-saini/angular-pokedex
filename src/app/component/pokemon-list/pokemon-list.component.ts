import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { PagerService } from './page.service'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon: Pokemon[];
  pager: any = {};
  pagedItems: any[];
  private allItems: any[];

  constructor(private pokemonService: PokemonService, private pagerService: PagerService) { }

  ngOnInit() {
    this.pokemonService.list()
      .then((pokemon) => {
          this.allItems = pokemon; 
          this.setPage(1);
        // this.pokemon = pokemon
      });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pokemon = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
