import { Directive, OnInit } from 'angular-ts-decorators';
import { HostListener } from 'angular-ts-decorators';


@Directive({
  selector: 'agenda-card',
  restrict: 'E',
  template: require('./agenda-card.html')
})
export class AgendaCard implements OnInit {

  ngOnInit() {
    console.log('BARON');
  }

}

