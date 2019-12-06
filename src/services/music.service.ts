import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Music } from 'src/model/music.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, header } from './constants';
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
        return this.http.get<Music>(`${apiURL}/Music/GetById/${id}`)
    }
    
    getMusicByUserId(id: number): Observable<Music[]> {
        return this.http.get<Music[]>(`${apiURL}/Music/GetByUser/${id}`)
    }
    
    addMusic(fk_user: number, fk_category: number, music_name: string, file: File): Observable<Music> {
        let formData = new FormData();
        let data = {
            fk_user: fk_user,
            fk_category: fk_category,
            music_name: music_name
        }
        formData.append("request", JSON.stringify(data));
        formData.append("value", file);
        return this.http.post<Music>(`${apiURL}/Music`, formData)
    }

    editMusicInfo(id:number, fk_category: number, music_name: string): Observable<Music> {
        let formData = new FormData();
        let data = {
            fk_category: fk_category,
            music_name: music_name
        }
        let options = {headers: "aaa"};
        formData.append("request", JSON.stringify(data));
        return this.http.put<Music>(`${apiURL}/Music/${id}`, formData)
    }
}
