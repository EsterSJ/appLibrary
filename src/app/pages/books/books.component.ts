import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[] = [];

  constructor(private apibookService: BooksService, public userService: UserService){
    this.apibookService.getAll(Number(this.userService.user.id_user)).subscribe((data: Book[]) => { 
                                              this.books = data;
                                            }); 
  }

  public removeBook(id_libro: string): void{    
    this.apibookService.delete(Number(this.userService.user.id_user),Number(id_libro)).subscribe((data: boolean) => {
                                                            if (data) {
                                                              this.apibookService.getAll(Number(this.userService.user.id_user)).subscribe((data: Book[]) => { this.books = data; });
                                                            }
                                                          });
  }

  public mostrarId(id_book: string): void{    
    if (id_book != ''){     
      this.apibookService.getOne(Number(this.userService.user.id_user), Number(id_book)).subscribe((data: Book[])=>{ this.books = data });
    }
    else{      
        this.apibookService.getAll(Number(this.userService.user.id_user)).subscribe((data: Book[]) => { this.books = data; });
      }
  }

}
