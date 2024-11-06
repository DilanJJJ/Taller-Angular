import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieService } from './serie.service';

@NgModule({
  declarations: [
    SerieListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SerieService],
  exports: [
    SerieListComponent
  ]
})
export class SerieModule { }
