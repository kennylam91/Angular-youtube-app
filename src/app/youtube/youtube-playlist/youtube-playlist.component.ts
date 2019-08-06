import {Component, OnInit} from '@angular/core';
import {YoutubePlayerComponent} from '../youtube-player/youtube-player.component';
import {YoutubePlaylistService} from './youtube-playlist.service';
import {Ivideo} from '../youtube-player/Video';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})

export class YoutubePlaylistComponent implements OnInit {
  private playList: Ivideo[];

  constructor(youtubeservice: YoutubePlaylistService) {
    this.playList = youtubeservice.playList;
  }

  ngOnInit() {
  }

}
