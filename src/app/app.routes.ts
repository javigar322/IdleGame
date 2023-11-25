import { Routes } from '@angular/router';
import { GalaxyCardComponent } from './shared/galaxy-card/galaxy-card.component';
import { IntergalacticMarketComponent } from './shared/intergalactic-market/intergalactic-market.component';
import { AllianceComponent } from './shared/alliance/alliance.component';

export const routes: Routes = [
  { path: 'card', component: GalaxyCardComponent },
  { path: 'market', component: IntergalacticMarketComponent },
  { path: 'alliance', component: AllianceComponent },
];
