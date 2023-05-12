import { Component } from '@angular/core';
import {RequestService} from "./services/request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-app';

  constructor(private requestService: RequestService) {}

  performSearch(query: string): void {
    this.requestService.search(query);
    console.log('Выполняется поиск с запросом:', query);
  }

}
