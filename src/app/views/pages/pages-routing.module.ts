import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
const routes:Routes=[
  {
    path:'',
    children: [
      {
        path:'table' , 
        component:TableComponent
      },
      {
        path:'cards' , 
        component:CardsComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
