import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import configuration from '../../app.config';

@Component({
  templateUrl: './input.component.html',
})
export class InputComponent {
  constructor(private http: HttpClient) {}
  shortUrl = 'https://www.google.com';

  onSubmit(longUrl: string) {
    console.log('submit');
    console.log(longUrl);
    const url =
      configuration.baseUrl + ':' + configuration.port + '/url/create';
    const body = { longUrl };
    this.http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  copyToClipboard() {
    console.log('copy');
  }
}
