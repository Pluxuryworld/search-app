import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private result$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  items$: Observable<any[]> = this.result$.pipe(
    map((result) => result?.items || [])
  );

  constructor(private http: HttpClient) {}

  search(query: string): void {
    const apiKey: string = 'AIzaSyB7mun4g6ZaMmaepCiZ46RUAQ2hk_6Ou4o';
    const url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=10&q=${query}&key=${apiKey}`;

    this.http.get(url).pipe(
      tap((response) => this.result$.next(response))
    ).subscribe();
  }

}
