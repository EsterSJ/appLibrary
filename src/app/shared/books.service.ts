import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[];

  constructor() { 
    this.books = [
      new Book(547,0,"El carnaval de los animales","Tapa dura","Katy Flint",24.95,"assets/img/carnaval_animales.jpg"),
      new Book(896,0,"Las cuatro estaciones en un día","Tapa dura","Katie Cotton",24.95,"assets/img/cuatro_estaciones.jpg"),
      new Book(486,0,"LA bella durmiente","Tapa dura","Katy Flint",24.95,"assets/img/bella_durmiente.jpg"),
      new Book(205,0,"La flauta mágica","Tapa dura","Katy Flint",24.95,"assets/img/flauta_magica.jpg"),
      new Book(673,0,"El lago de los cisnes","Tapa dura","Katie Cotton",24.95,"assets/img/lago_cisnes.jpg"),
    ];
  }

  public getAll(): Book[]{
    return this.books;
  }

  public getOne(id_book: number): Book{
    let i: number = 0;
  
    while (i<this.books.length && id_book != this.books[i].id_book){
      i++;
    }

    if(id_book == this.books[i].id_book){
      console.log("Libro encontrado: " + this.books[i].title);
      return this.books[i];
    }
  }

  public add(book: Book):void{
    this.books.push(book);
  }

  public edit(book: Book): boolean{
    let id_book = book.id_book;
    let editado: boolean = false;
    let i: number = 0;

    console.log("-----Titulo a cambiar: " + book.title + "---" + typeof(book.title));
    

    
    do{
      i++;
    } while (i<this.books.length && book.id_book != this.books[i].id_book);

    if(book.id_book == this.books[i].id_book){
      if (book.title != ''){this.books[i].title = book.title};
      if (book.type != ''){this.books[i].type = book.type};
      if (book.author != ''){this.books[i].author = book.author};
      if (book.price != Number('')){this.books[i].price = book.price};
      if (book.photo != ''){this.books[i].photo = book.photo};
      editado = true;
    }
    return editado;
  }

  public delete(id_book: number): void{
    console.log("Vamos a borrar un libro");
    
    let i: number = 0;
    let borrado: boolean = false;
    do{
      console.log("buscando el libro en la vuelta " + i);
      
      if(id_book == this.books[i].id_book){
        this.books.splice(i,1);
        borrado = true;
      }
      i++;
    } while (i<this.books.length || !borrado)
  }
  // getAll(): Book[]
  // getOne(id_libro: number): Book
  // add(book: Book): void
  // edit(book: Book): boolean
  // delete(id_book: number): boolean
}
