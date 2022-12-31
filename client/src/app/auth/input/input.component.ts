import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import configuration from '../../app.config';

@Component({
  templateUrl: './input.component.html',
})
export class InputComponent {
  constructor(private http: HttpClient, private clipboard: Clipboard) {}
  shortUrl = '';

  onSubmit(longUrl: string) {
    console.log('submit');
    console.log(longUrl);
    const url = configuration.baseUrl + ':' + configuration.port;
    const body = { longUrl };
    this.http.post(url + '/url/create', body).subscribe((res: any) => {
      console.log(res);
      this.shortUrl = url + '/url/' + res.shortUrl;
    });
  }

  copyToClipboard() {
    console.log('copy');
    this.clipboard.copy(this.shortUrl);
  }
}
