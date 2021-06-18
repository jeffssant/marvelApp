import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Md5} from 'ts-md5/dist/md5';
import {map } from 'rxjs/operators';

export interface Heroes {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Result[];
}

export interface Result {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   Thumbnail;
  resourceURI: string;
  comics:      Comics;
  series:      Comics;
  stories:     Stories;
  events:      Comics;
  urls:        URL[];
}

export interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

export interface ComicsItem {
  resourceURI: string;
  name:        string;
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        Type;
}

export enum Type {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path:      string;
  extension: string;
}

export interface URL {
  type: string;
  url:  string;
}


@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {

  md5 = new Md5();

  private baseUrl: string = environment.baseUrl;
  private currentTimeInSeconds = Date.now();
  private hashDate = String(this.currentTimeInSeconds);  
  private hash = this.md5.appendStr(this.hashDate+environment.hash+environment.apiKey).end();
  private query = `ts=${this.hashDate}&apikey=${environment.apiKey}&hash=${this.hash}&limit=1`

  constructor(private http: HttpClient) { }
  
  getHeroesId(heroName: string) {

    return this.http.get<Heroes>(`${this.baseUrl}?name=${heroName}&${this.query}`)
    .pipe( map(
              resp => { 
                return resp.data.results[0]
              }
            )
          );
  }

}

