import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  
  public books: Book[];

  constructor(public apibookService: BooksService, public router: Router, public userService: UserService){
    this.apibookService.getAll(Number(this.userService.user.id_user)).subscribe((data: Book[]) => { this.books = data; });
  }

  public addBook(title: string, type: string, author: string, price: number, photo: string, id_book: string, id_user: string){
    let codigo_libro: number = Number(id_book);
    let codigo_usuario: number = Number(this.userService.user.id_user);
    let libro: Book = new Book(title,type,author,price,photo, codigo_libro,codigo_usuario);
    this.apibookService.add(libro).subscribe((data: Book[]) => {
                                                this.books = data; 
                                                this.router.navigateByUrl('/books'); 
                                            });        
  }

}
