import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  @ViewChild('actualizar') ref_book: ElementRef;
  public books: Book[];

  constructor(public bookService: BooksService, public router: Router, public renderer2: Renderer2){
    this.books = this.bookService.getAll();
  }

  public editBook(id_user: string, id_book: string, title: string, type: string, author: string, price: number, photo: string){
    if (id_book == ''){
      const id = this.ref_book.nativeElement; 
      this.renderer2.setStyle(id,"display","block");
      setTimeout(()=>{this.renderer2.setStyle(id,"display","none")},3000);
    }else{
      let codigo_libro: number = Number(id_book);
      let codigo_usuario: number = Number(id_user);
      let libro: Book = new Book(codigo_libro,codigo_usuario,title,type,author,price,photo);
      this.bookService.edit(libro);
      this.router.navigateByUrl('/books');
    }        
  }
}
