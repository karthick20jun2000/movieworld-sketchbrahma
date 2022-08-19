import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  API_URL:any = environment.BASE_URL;
  API_Key:any = environment.API_KEY
  constructor(
    private http:HttpClient
  ) { }


  getMovieList(){
    return this.http.get(`${this.API_URL}/popular?api_key=${this.API_Key}&language=en-US&page=1`).toPromise()
  }
}
