import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-playlist-player',
  templateUrl: './playlist-player.component.html',
  styleUrls: ['./playlist-player.component.scss']
})
export class PlaylistPlayerComponent {

  playlistId$ :Observable<string>;

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
    this.playlistId$ = this.route.queryParams.pipe(
      map((params) => params['videoId'])
    )
  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
