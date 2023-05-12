import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  items$!: Observable<any[]>;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.items$ = this.requestService.items$;
  }
}
