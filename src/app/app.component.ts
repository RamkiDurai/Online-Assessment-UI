import { Component, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  config: CountdownConfig = { leftTime: 1800, notify: [120] ,format : 'mm:ss' };
  // formate : CountdownConfig = {}
  title = 'Online-Assessment-UI';
  constructor(){
    // this.countdown.begin();
  }
 ngAfterViewInit(){
   debugger
  this.countdown.begin();
 }

 handleEvent(event){
 console.log(event);
//  alert('2 minutes left');
 }
  ngOnInit(){

  }
}
