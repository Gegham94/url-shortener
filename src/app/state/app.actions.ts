import { createAction, props } from '@ngrx/store';

export const shortenUrl = createAction('[UrlForm Component] Shorten URL', props<{ url: string }>());
export const shortenUrlSuccess = createAction('[UrlShortenerService] Shorten URL Success', props<{ link1: string, link2: string }>());
export const shortenUrlFailure = createAction('[UrlShortenerService] Shorten URL Failure', props<{ error: any }>());