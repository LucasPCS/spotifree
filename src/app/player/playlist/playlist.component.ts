import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/services/playlist.service';
import { Playlist } from 'src/model/playlist.model';
import { userId } from 'src/services/constants';
import { EventEmitterService } from 'src/services/event-emitter.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
    
    playlists: Playlist[] = [];
    
    constructor(private playlistService: PlaylistService, private eventEmitterService: EventEmitterService) { }
    
    ngOnInit() {
        this.playlistService.getPlaylistByUserId(userId)
        .subscribe(res => {
            this.playlists = res;
        })
    }
    
}
