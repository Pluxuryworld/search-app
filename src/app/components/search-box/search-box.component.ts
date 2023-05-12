import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output() searchQuery = new EventEmitter<string>();

  title = 'Search app';

  onSearch(value:string): void{
    this.searchQuery.emit(value);
  }

}
