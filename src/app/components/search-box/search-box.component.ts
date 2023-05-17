import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  title = 'Search app';
  // @ts-ignore
  @ViewChild("queryRef") inputField: ElementRef<HTMLInputElement> ;
  @Output() searchQuery = new EventEmitter<string>();
  onSearch(value:string): void{
    this.searchQuery.emit(value);
  }
  clearInput(): void {
    this.searchQuery.emit('');
    this.inputField.nativeElement.value = '';

  }
}
