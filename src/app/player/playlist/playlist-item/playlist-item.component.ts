import { Component, OnInit, Output } from '@angular/core';
import { Playlist } from 'src/model/playlist.model';
import { PlaylistService } from 'src/services/playlist.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import { Track } from 'ngx-audio-player';
import { fileURL } from 'src/services/constants';

@Component({
    selector: 'app-playlist-item',
    templateUrl: './playlist-item.component.html',
    styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {

    @Output() playClicked = new EventEmitter

    playlist: Playlist = new Playlist();

    tracks: Track[] = [];
    
    constructor(private playlistService: PlaylistService, private route: ActivatedRoute) { }
    
    ngOnInit() {

        this.playlistService.getPlaylistById(+this.route.snapshot.paramMap.get("id"))
        .subscribe(res => {
            this.playlist = res;
            this.playlist.musics.forEach(music => {
                let track: Track = new Track();
                music["Dir_music"] = music["Dir_music"].replace(/\~/g, "");
                track["title"] = music["Name"];
                track["link"] = fileURL+music["Dir_music"];
                this.tracks.push(track);
            });
            console.log(this.tracks)
        })
    }
    
}
