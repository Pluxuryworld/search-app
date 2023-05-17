import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnChanges{
  imageUrl: string = '';
  @Input() itemInput: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemInput'] && changes['itemInput'].currentValue) {
      const currentItem = changes['itemInput'].currentValue;
      if (currentItem.snippet && currentItem.snippet.thumbnails) {
        this.imageUrl = currentItem.snippet.thumbnails.high.url;
        console.log(this.imageUrl);
      }
    }
  }
}
