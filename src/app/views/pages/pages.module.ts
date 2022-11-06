import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from '../partials/card/card.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [TableComponent, CardsComponent,CardComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
