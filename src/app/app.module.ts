import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RoutesModule } from './router/app.routes';
import { PokemonService } from './pokemon/pokemon.service';
import { PokedexComponent } from './component/pokedex/pokedex.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { PagerService } from './component/pokemon-list/page.service';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
  ],
  providers: [
    PokemonService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
