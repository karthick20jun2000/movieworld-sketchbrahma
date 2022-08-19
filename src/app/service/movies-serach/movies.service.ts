import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL:any = environment.searchBase_URL;
  API_Key:any = environment.API_KEY;
  serachMovieList:any = new BehaviorSubject({});
  constructor(
    private http:HttpClient
  ) { }
  // include_adult=false
  getSerachMovieList(data:any){
    return this.http.get(`${this.API_URL}/?api_key=${this.API_Key}&language=en-US&page=1&query=${data}`).toPromise()
  }
}
