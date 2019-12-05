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

    getPlaylistById(id): Observable<Playlist> {
        return this.http.get(`${apiURL}/list/${id}`)
        .pipe(
            map(res => {
                let playlist: Playlist = new Playlist();
                playlist.created = res["Created"];
                playlist.id = res["Id"];
                playlist.is_album = res["Is_Album"];
                playlist.name = res["Name"];
                playlist.user = res["User"];
                playlist.musics = res["Musics"]
                return playlist
            })
        )
    }
}
