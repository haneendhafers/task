import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() cards;
@Output() cardSelected = new EventEmitter()
  constructor(private modalService :NgbModal) { }

  ngOnInit(): void {
  }
  viewCard(){
  this.cardSelected.emit(this.cards)
}
  openSmModal(content) {
    console.log(content);
    this.modalService.open(content, {size: 'sm'}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }

}
