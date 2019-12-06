import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/model/playlist.model';
import { PlaylistService } from 'src/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from 'ngx-audio-player';
import { fileURL } from 'src/services/constants';
import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/services/event-emitter.service';

@Component({
    selector: 'app-playlist-item',
    templateUrl: './playlist-item.component.html',
    styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {

    playlist: Playlist = new Playlist();

    displayedColumns: string[] = ['Name', 'Category'];

    tracks: Track[] = [];
    
    constructor(private playlistService: PlaylistService, private route: ActivatedRoute, private eventEmitterService: EventEmitterService) { }
    
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
            console.log(this.playlist.musics)
        })
    }

    playSet(event: Event) {
        this.eventEmitterService.emitPlaylistChange(this.tracks);
    }
    
}
