import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {YoutubePlaylistComponent} from './youtube/youtube-playlist/youtube-playlist.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {YoutubePlayerComponent} from './youtube/youtube-player/youtube-player.component';

const routes: Routes = [
  {path: 'youtube', component: YoutubePlaylistComponent},
  {path: '', redirectTo: '/youtube', pathMatch : 'full'},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
