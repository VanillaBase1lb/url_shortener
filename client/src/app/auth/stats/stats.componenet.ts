import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NbTreeGridComponent } from '@nebular/theme';
import configuration from '../../app.config';

@Component({
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  constructor(private http: HttpClient) {}
  url = configuration.baseUrl + ':' + configuration.port;
  showStats() {
    this.http.get(this.url + '/url/stats').subscribe((data) => {
      console.log(data);
    });
  }
}
