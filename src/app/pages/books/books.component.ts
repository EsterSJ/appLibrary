import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Book[];

  constructor(){
    // this.books = [];
    this.books = [
      new Book(0,547,"El carnaval de los animales","Tapa dura","Katy Flint",24.95,"assets/img/carnaval_animales.jpg"),
      new Book(0,896,"Las cuatro estaciones en un día","Tapa dura","Katie Cotton",24.95,"assets/img/cuatro_estaciones.jpg"),
      new Book(0,486,"LA bella durmiente","Tapa dura","Katy Flint",24.95,"assets/img/bella_durmiente.jpg"),
      new Book(0,205,"La flauta mágica","Tapa dura","Katy Flint",24.95,"assets/img/flauta_magica.jpg"),
      new Book(0,673,"El lago de los cisnes","Tapa dura","Katie Cotton",24.95,"assets/img/lago_cisnes.jpg"),
    ];
  }

  public addBook(id_book: string, id_user: string, title: string, type: string, author: string, price: number, photo: string){
    let codigo_libro: number = Number(id_book);
    let codigo_usuario: number = Number(id_user);
    let libro: Book = new Book(codigo_libro,codigo_usuario,title,type,author,price,photo);
    this.books.push(libro); 
  }
}
