import { Component } from '@angular/core';
import { Device } from './device';

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

  // 點擊該列選擇按鈕時顯示當前設備名稱、測點名稱
  selectDevice:string = '';  

  onSelect(device: any): void {
    this.selectDevice = device.device_name + ' - ' + device.signal_id;
  }

}







