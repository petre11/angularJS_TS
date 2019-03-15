import { NgModule } from 'angular-ts-decorators';
import { AgendaCard } from './agenda-card/agenda-card.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './Views/heroes/heroes.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AgendaCard,
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    TopBarComponent
  ],
  providers: [
    HeroService,
    MessageService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
