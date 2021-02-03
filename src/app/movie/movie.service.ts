import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiURL = "";
  // private apiURL = "https://crudcrud.com/api/92d7bfc212704da2be552f4ab0b60091";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiURL + '/movies/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<Movie> {
    return this.httpClient.post<Movie>(this.apiURL + '/movies/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<Movie> {
    return this.httpClient.get<Movie>(this.apiURL + '/movies/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<Movie> {
    return this.httpClient.put<Movie>(this.apiURL + '/movies/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Movie>(this.apiURL + '/movies/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
