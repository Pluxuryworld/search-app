import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnChanges{
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

  openChannelOnYouTube(channelId: string): void {
    const youtubeUrl = `https://www.youtube.com/channel/${channelId}`;
    window.open(youtubeUrl, '_blank');
  }

}

