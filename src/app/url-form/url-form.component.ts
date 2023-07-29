import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { shortenUrlSuccess } from '../state/app.actions';
import { UrlShortenerService } from 'src/app/url.shortener.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss'],
})
export class UrlFormComponent implements OnInit {
  public emptyUrl = true;
  public urlInput: string = '';
  public link1$!: Observable<string>;
  public link2$!: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private _urlShortenerService: UrlShortenerService
  ) {}

  ngOnInit() {
    this.link1$ = this.store.select((state) => state.shortLinks.link1);
    this.link2$ = this.store.select((state) => state.shortLinks.link2);
  }

  public shortenUrl() {
    if (this.urlInput === '' || this.urlInput === null) {
      this.emptyUrl = true;
    } else {
      this.emptyUrl = false;
      this._urlShortenerService
        .shortenUrl(this.urlInput)
        .subscribe((response) => {
          this.store.dispatch(
            shortenUrlSuccess({
              link1: response.result.full_short_link,
              link2: response.result.full_short_link2,
            })
          );
        });
      this.urlInput = '';
    }
  }
}
