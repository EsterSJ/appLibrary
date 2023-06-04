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
  public books: Book[] = [];

  constructor(public apibookService: BooksService, public router: Router, public renderer2: Renderer2){
    this.apibookService.getAll().subscribe((data: Book[]) => { this.books = data; });
  }

  public editBook(title: string, type: string, author: string, price: number, photo: string, id_book: string, id_user: string){
    if (id_book == ''){
      const id = this.ref_book.nativeElement; 
      this.renderer2.setStyle(id,"display","block");
      setTimeout(()=>{this.renderer2.setStyle(id,"display","none")},3000);
    }else{
      let codigo_libro: number = Number(id_book);
      let codigo_usuario: number = Number(id_user);
      let libro: Book = new Book(title,type,author,price,photo,codigo_libro,codigo_usuario);          
      this.apibookService.edit(libro).subscribe((data: Book[]) => {
                                                    this.books = data; 
                                                    this.router.navigateByUrl('/books'); 
                                               });
    }        
  }
}
