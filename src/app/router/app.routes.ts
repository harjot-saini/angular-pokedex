import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from '../component/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../component/pokemon-detail/pokemon-detail.component';

let routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'details/:id',
    component: PokemonDetailComponent
  }
];

const RoutesModule = RouterModule.forRoot(routes);
export { RoutesModule };