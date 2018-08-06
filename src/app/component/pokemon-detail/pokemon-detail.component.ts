import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  id: number;
  pokemon: Pokemon;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      if (!isNaN(this.id)) {
        this.pokemonService.getDetails(this.id)
          .then((details) => {
            this.pokemon = details;
          });
      }
    });
  }
}
