import { Component, OnInit } from 'angular-ts-decorators';

@Component({
  selector: 'top-bar',
  template: require('./top-bar.component.html'),
  styles: [require('./top-bar.component.scss')]
})
export class TopBarComponent implements OnInit {

  ngOnInit() {
  }

}
