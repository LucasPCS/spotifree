import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Playlist } from 'src/model/playlist.model';
import { apiURL } from './constants';

@Injectable({
    providedIn: 'root'
})
export class PlaylistService {

    constructor(private http: HttpClient) { }

    getPlaylistByUserId(id: number): Observable<Playlist[]> {
        return this.http.get<Playlist[]>(`${apiURL}/List/GetByUser/${id}`)
    }

    getPlaylistById(id: number): Observable<Playlist> {
        return this.http.get<Playlist>(`${apiURL}/List/GetById/${id}`)
    }

    addPlaylist(idUser: number, name: string): Observable<Playlist> {
        let applicationJson = {"Content-Type": "application/json"}
        return this.http.post<Playlist>(`${apiURL}/List`, {fk_user: idUser, is_album: 0, name: name}, {headers: applicationJson})
    }

    addMusicToPlaylist(id_music: number, id_list: number): Observable<Playlist> {
        let applicationJson = {"Content-Type": "application/json"}
        return this.http.post<Playlist>(`${apiURL}/musiclist/`, {id_music: id_music, id_list: id_list, add_music: 1}, {headers: applicationJson})
    }
}
