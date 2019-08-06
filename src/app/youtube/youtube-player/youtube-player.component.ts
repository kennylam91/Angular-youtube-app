import {Component, OnInit} from '@angular/core';
import {YoutubePlaylistComponent} from '../youtube-playlist/youtube-playlist.component';
import {Ivideo} from './Video';
import {YoutubePlaylistService} from '../youtube-playlist/youtube-playlist.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  video: Ivideo;

  constructor(private youtubeService: YoutubePlaylistService,
              private activatedRouter: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.video = this.youtubeService.findById(id);
    });
  }

  getSrc() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.id);
  }

}
