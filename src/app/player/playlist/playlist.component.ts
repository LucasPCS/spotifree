import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/services/playlist.service';
import { Playlist } from 'src/model/playlist.model';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
    
    playlists: Playlist[] = [];
    
    constructor(private playlistService: PlaylistService) { }
    
    ngOnInit() {
        this.playlistService.getPlaylistById(2)
        .subscribe(res => {
            this.playlists.push(res);
        })
    }
    
}
