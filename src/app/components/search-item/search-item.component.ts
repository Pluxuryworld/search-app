import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnChanges{
  imageUrl: string = '';
  @Input() item: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && changes['item'].currentValue) {
      const currentItem = changes['item'].currentValue;
      if (currentItem.snippet && currentItem.snippet.thumbnails) {
        this.imageUrl = currentItem.snippet.thumbnails.high.url;
        console.log(this.imageUrl);
      }
    }
  }
}
