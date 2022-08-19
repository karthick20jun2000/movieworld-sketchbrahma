import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../service/loader/loader.service';
import { MovieListService } from '../../../service/movies-list/movie-list.service';
import { MoviesService } from '../../../service/movies-serach/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList:any = []
  constructor(
    private movieListSer:MovieListService,
    private serachMovieSer:MoviesService,
    private loaderSer:LoaderService
  ) { }

  ngOnInit(): void {
    this.getMovieListDetails()
    this.serachMovieSer.serachMovieList.subscribe((result:any) => {
      console.log(result);
      if(result.data === 'NoData'){
        this.getMovieListDetails()
      }else{
        this.movieList = result.data
      }
    })
  }

  async getMovieListDetails(){
    try {
      this.loaderSer.show()
      const result:any = await this.movieListSer.getMovieList();
      this.movieList = result.results;
      setTimeout(() => {
      this.loaderSer.hide()
      }, 1000);
    } catch (error) {
      console.error(error);
      this.loaderSer.hide()
    }
  }

}
