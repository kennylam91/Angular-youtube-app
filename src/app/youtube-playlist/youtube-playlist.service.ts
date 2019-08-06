import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {
  // tslint:disable-next-line:variable-name
  private _playList = [
    {name: '1', id: 'a'},
    {name: '2', id: 'b'}];


  get playList(): { id: string; name: string }[] {
    return this._playList;
  }

  set playList(value: { id: string; name: string }[]) {
    this._playList = value;
  }

  constructor() {
  }
}
