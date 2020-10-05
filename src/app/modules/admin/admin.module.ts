import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedMaterialModule } from '../shared/sharedMaterial.module';
import { LibModule } from '../lib/lib.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedMaterialModule,
    LibModule,
  ]
})
export class AdminModule { }
