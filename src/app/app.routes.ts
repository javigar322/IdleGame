import { Routes } from '@angular/router';
import { GalaxyCardComponent } from './pages/galaxy-card/galaxy-card.component';
import { IntergalacticMarketComponent } from './pages/intergalactic-market/intergalactic-market.component';
import { AllianceComponent } from './pages/alliance/alliance.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'card', component: GalaxyCardComponent },
  { path: 'market', component: IntergalacticMarketComponent },
  { path: 'alliance', component: AllianceComponent },
  { path: '**', component: NotFoundComponent },
];
