import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  allDevices = [
    { device_name: 'D1',  signal_id: 'd1s2' },
    { device_name: 'D2',  signal_id: 'd2s2' },
    { device_name: 'D2',  signal_id: 'd2s1' },
    { device_name: 'D1',  signal_id: 'd1s1' }
  ];

  get devices() {
    return this.allDevices;
  }

}







