import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './player/music/music.component';
import { PlaylistComponent } from './player/playlist/playlist.component';
import { PlaylistItemComponent } from './player/playlist/playlist-item/playlist-item.component';
import { CategoryComponent } from './player/category/category.component';
import { CategoryItemComponent } from './player/category/category-item/category-item.component';


const routes: Routes = [
    { 
        path: 'music', component: MusicComponent 
    },
    { 
        path: 'playlists', component: PlaylistComponent, pathMatch: 'full'
    },
    { 
        path: 'playlist/:id', component: PlaylistItemComponent 
    },
    { 
        path: 'category', component: CategoryComponent, pathMatch: 'full'
    },
    { 
        path: 'category/:id', component: CategoryItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
