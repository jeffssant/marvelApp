import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Md5} from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators';
import { Heroes } from "../../../app/heroes/home/interfaces/home.interface";

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

