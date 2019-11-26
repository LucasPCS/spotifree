import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    
    msaapDisplayTitle = true;
    @Input('displayPlaylist') msaapDisplayPlayList: boolean;
    msaapPageSizeOptions = [2,4,6];
    msaapDisplayVolumeControls = true;
    
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
        {
            title: 'Musica 1',
            link: 'http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3'
        },
        {
            title: 'Musica 2',
            link: 'http://www.bigrockmusic.com/mp3/track_01.mp3'
        },
        {
            title: 'Musica 1',
            link: 'http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3'
        },
        {
            title: 'Musica 2',
            link: 'http://www.bigrockmusic.com/mp3/track_01.mp3'
        },
        {
            title: 'Musica 1',
            link: 'http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3'
        },
        {
            title: 'Musica 2',
            link: 'http://www.bigrockmusic.com/mp3/track_01.mp3'
        },
    ];
    
    constructor() { }
    
    ngOnInit() {
    }
    
}
