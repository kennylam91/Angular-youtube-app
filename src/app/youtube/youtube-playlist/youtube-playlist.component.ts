import {Component, OnInit} from '@angular/core';
import {YoutubePlayerComponent} from '../youtube-player/youtube-player.component';
import {YoutubePlaylistService} from './youtube-playlist.service';

interface Ivideo {
  name: string;
  id: string;
}
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
