import { Injectable } from '@angular/core';
import { Mustang } from './mustang';
import { MUSTANGS } from './mock-stangs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MustangService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
  getMustangs(): Observable<Mustang[]> {
    
    return this.http.get<Mustang[]>(this.mustangsUrl)
    .pipe(tap(_ => this.log('fetched mustangs')), catchError(this.handleError<Mustang[]>('getMustangs', [])));
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  // POST: add a new hero to the server

  addMustang(mustang: Mustang): Observable<Mustang> {
    return this.http.post<Mustang>(this.mustangsUrl, mustang, this.httpOptions).pipe(
      tap((newMustang: Mustang) => this.log(`added mustang w/ id=${newMustang.id}`)),
      catchError(this.handleError<Mustang>('addMustang'))
    );
  }

  // DELETE: delete the mustang from the server 

deleteMustang(id: number): Observable<Mustang> {
  const url = `${this.mustangsUrl}/${id}`;

  return this.http.delete<Mustang>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted mustang id=${id}`)),
    catchError(this.handleError<Mustang>('deleteMustang'))
  );
}

  //GET MUSTANG BY ID. Will 404 if not found

  getMustang(id: number): Observable<Mustang> {
    const url = `${this.mustangsUrl}/${id}`;
    return this.http.get<Mustang>(url).pipe(
      tap(_ => this.log(`fetched mustang id=${id}`)),
      catchError(this.handleError<Mustang>(`getMustang id=${id}`))
    );
  }

  /* GET mustangs whose name contains search term */
searchMustangs(term: string): Observable<Mustang[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Mustang[]>(`${this.mustangsUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found mustangs matching "${term}"`) :
       this.log(`no mustangs matching "${term}"`)),
    catchError(this.handleError<Mustang[]>('searchMustangs', []))
  );
}

  //UPDATE MUSTANG on the server

  updateMustang(mustang: Mustang): Observable<any> {
    return this.http.put(this.mustangsUrl, mustang, this.httpOptions).pipe(
      tap(_ => this.log(`updated mustang id=${mustang.id}`)),
      catchError(this.handleError<any>('updateMustang'))
    );
  }

  private log(message: string) {
    this.messageService.add(`MustangService: ${message}`);
  }

  private mustangsUrl = 'api/mustangs'; //URL to the web api
 
}
