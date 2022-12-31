import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { InputComponent } from './input/input.component';
import { StatsComponent } from './stats/stats.componenet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,
    NbCardModule,
    NbTreeGridModule,
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    NgxRegisterComponent,
    InputComponent,
    StatsComponent,
  ],
  providers: [],
})
export class NgxAuthModule {}
