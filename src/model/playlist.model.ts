import { Music } from './music.model';

export class Playlist {
    id: number;
    name: string;
    is_album: number;
    created: string;
    user: any;
    musics: any[];
}