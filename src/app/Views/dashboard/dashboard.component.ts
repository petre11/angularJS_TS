import { Component, OnInit } from 'angular-ts-decorators';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
  styles: [ require('./dashboard.component.scss') ]
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    console.log('HELLO DASHBOARD');
  }
}
