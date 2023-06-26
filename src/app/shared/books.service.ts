import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url: string = 'http://localhost:3000/books';


  constructor(private http: HttpClient) { 

  }

  public getAll(id_user: number){
    return this.http.get(this.url + '?id_user=' + id_user);
  }

  public getOne(id_user: number, id_book: number){
    return this.http.get(this.url + '?id_user=' + id_user + '&id_book=' + id_book);
  }

  public add(book: Book){
    return this.http.post(this.url,book);
  }

  public edit(book: Book){
    return this.http.put(this.url,book);
  }

  public delete(id_user: number, id_book: number){
    return this.http.request('delete',this.url,{body:{id_user: id_user, id_book: id_book}})
  }
}
