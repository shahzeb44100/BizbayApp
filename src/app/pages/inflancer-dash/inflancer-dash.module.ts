import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InflancerDashPageRoutingModule } from './inflancer-dash-routing.module';

import { InflancerDashPage } from './inflancer-dash.page';
import { TabsPage } from '../tabs/tabs.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InflancerDashPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InflancerDashPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class InflancerDashPageModule {}
