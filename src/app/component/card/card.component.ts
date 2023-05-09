import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() libro: Book;
@Input() par: boolean;
@Output() nombreLibro = new EventEmitter<string>();

constructor() {}

enviarLibro():void{
  this.nombreLibro.emit(this.libro.title);
}
}
