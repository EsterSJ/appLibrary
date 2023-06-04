import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[] = [];

  constructor(private apibookService: BooksService){
    this.apibookService.getAll().subscribe((data: Book[]) => { 
                                              this.books = data; console.log(data);
                                            }); 
  }

  public removeBook(id_libro: string): void{    
    this.apibookService.delete(Number(id_libro)).subscribe((data: boolean) => {
                                                            if (data) {
                                                              this.apibookService.getAll().subscribe((data: Book[]) => { this.books = data; });
                                                            }
                                                          });
  }

  public mostrarId(id: string): void{    
    if (id != ''){     
      this.apibookService.getOne(Number(id)).subscribe((data: Book[])=>{ this.books = data });
    }
    else{      
        this.apibookService.getAll().subscribe((data: Book[]) => { this.books = data; });
      }
  }

}
