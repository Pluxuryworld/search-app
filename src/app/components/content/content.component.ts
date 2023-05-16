import { Component, Input, OnInit} from '@angular/core';
import { RequestService} from "../../services/request.service";
import { Observable} from "rxjs";
import { Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() query!: string;
  items$!: Observable<any[]>;

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    this.items$ = this.requestService.items$;
  }


}
