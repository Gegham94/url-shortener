import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private apiUrl = 'https://api.shrtco.de/v2/shorten';

  constructor(private http: HttpClient) {}

  shortenUrl(url: string) {
    return this.http.get<any>(this.apiUrl + `?url=${url}`);
  }
}
