import {Injectable} from '@angular/core';
import {Ivideo} from '../youtube-player/Video';

@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {
  // tslint:disable-next-line:variable-name
  private _playList = [
    {name: ' ILLIONAIRE Dok2 & The Quiett - YGGR', id: 'https://www.youtube.com/embed/D86MB1EyvvQ?list=RDD86MB1EyvvQ'},
    {name: 'L4L (Lookin For Luv)', id: 'https://www.youtube.com/embed/DYOLXqhmYUU'}];


  get playList(): { id: string; name: string }[] {
    return this._playList;
  }

  set playList(value: { id: string; name: string }[]) {
    this._playList = value;
  }

  findById(id: string) {
    return this.playList.find(item => item.id === id);
  }

  constructor() {
  }
}
