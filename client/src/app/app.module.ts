import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
} from '@nebular/auth';
import configuration from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'access_token',
          },
          baseEndpoint: configuration.baseUrl + ':' + configuration.port,
          login: {
            endpoint: '/auth/login',
            method: 'post',
            redirect: {
              success: '/home',
              failure: null,
            },
          },
          register: {
            endpoint: '/auth/signup',
            method: 'post',
            redirect: {
              success: '/home',
              failure: null,
            },
          },
        }),
      ],
      forms: {
        // login: {
        //   strategy: 'email',
        //   rememberMe: false,
        //   showMessages: {
        //     success: true,
        //     error: true,
        //   },
        // },
        // register: {
        //   strategy: 'email',
        //   rememberMe: false,
        //   showMessages: {
        //     success: true,
        //     error: true,
        //   },
        // },
        // validation: {
        //   password: {
        //     required: true,
        //   },
        //   email: {
        //     required: true,
        //     email: false,
        //   },
        //   fullName: {
        //     required: false,
        //   },
        // },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
