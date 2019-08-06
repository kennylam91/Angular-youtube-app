import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {
  // tslint:disable-next-line:variable-name
  private _playList = [
    {name: '1', src: 'a'},
    {name: '2', src: 'b'}];


  get playList(): { src: string; name: string }[] {
    return this._playList;
  }

  set playList(value: { src: string; name: string }[]) {
    this._playList = value;
  }

  constructor() {
  }
}
