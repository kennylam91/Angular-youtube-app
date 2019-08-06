import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {
  // tslint:disable-next-line:variable-name
  private _playList = [
    {name: ' ILLIONAIRE Dok2 & The Quiett - YGGR', id: 'https://www.youtube.com/watch?v=D86MB1EyvvQ&list=RDMMD86MB1EyvvQ&start_radio=1'},
    {name: 'L4L (Lookin For Luv)', id: 'https://www.youtube.com/watch?v=DYOLXqhmYUU'}];


  get playList(): { id: string; name: string }[] {
    return this._playList;
  }

  set playList(value: { id: string; name: string }[]) {
    this._playList = value;
  }

  constructor() {
  }
}
