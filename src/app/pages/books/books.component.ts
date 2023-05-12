import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

  constructor(public bookService: BooksService){
    this.books = this.bookService.getAll();

  }

  public removeBook(id_libro: string):void{    
    this.bookService.delete(Number(id_libro));
  }

  public mostrarId(id: string): void{
    console.log("-----Boton search activado------");
    console.log("Id a mostrar: " + id);
    
    if (id != ''){
      console.log("Entro en el if de mostrarId");
      this.books = [this.bookService.getOne(Number(id))]
    }
    else{
        this.books = this.bookService.getAll();
      }
  }

}
