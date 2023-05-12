import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  
  public books: Book[];

  constructor(public bookService: BooksService, public router: Router){
    this.books = this.bookService.getAll();
  }

  public addBook(id_book: string, id_user: string, title: string, type: string, author: string, price: number, photo: string){
    let codigo_libro: number = Number(id_book);
    let codigo_usuario: number = Number(id_user);
    let libro: Book = new Book(codigo_libro,codigo_usuario,title,type,author,price,photo);
    this.bookService.add(libro);
    this.router.navigateByUrl('/books');        
  }

}
