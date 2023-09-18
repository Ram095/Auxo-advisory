import { Component } from '@angular/core';
declare var Calendly: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scheduleCall() {
    console.log('Schedule');
    Calendly.initPopupWidget({url: 'https://calendly.com/ankitaugustus/introcall'});
    return false;
  }
}