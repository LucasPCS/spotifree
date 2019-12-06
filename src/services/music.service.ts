import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Music } from 'src/model/music.model';
import { HttpClient } from '@angular/common/http';
import { apiURL } from './constants';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    
    constructor(private http: HttpClient) {
        
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
    }
    
    getMusicById(id: number): Observable<Music> {
        return this.http.get(`${apiURL}/Music/${id}`)
        .pipe(
            map(res => {
                let music: Music = new Music();
                music.dir_music = res["Dir_music"];
                music.name = res["Name"];
                return  music;
            })
        )
    }
}
