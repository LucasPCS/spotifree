import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiURL } from './constants';
import { map } from 'rxjs/operators';
import { Category } from 'src/model/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    
    constructor(private http: HttpClient) {
        
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
    }
    
    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${apiURL}/Category`);
    }
}
