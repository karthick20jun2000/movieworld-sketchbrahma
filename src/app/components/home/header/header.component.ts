import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../service/loader/loader.service';
import { MoviesService } from '../../../service/movies-serach/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText:any = ''
  constructor(
    private movieSearchSer:MoviesService,
    private loaderSer:LoaderService
  ) { }

  ngOnInit(): void {
  }

  searchMovieList(event?:any, searchText?:any){
    if(event?.target?.value ){
      this.loaderSer.show()
      if(event?.target?.value !== undefined)
        this.searchText = event.target.value;
      else
        this.searchText = searchText;
      this.movieSerachDetails(this.searchText)
    }else{
      this.movieSearchSer.serachMovieList.next({data: 'NoData'})
    }
  }

  SerachButton(){
    if(!this.searchText){
      return;
    }
    this.searchMovieList('', this.searchText)
  }


  async movieSerachDetails(searchText:String){
    try {
      const result:any = await this.movieSearchSer.getSerachMovieList(searchText);
        this.movieSearchSer.serachMovieList.next({data: result.results})
        this.loaderSer.hide()
    } catch (error) {
      this.loaderSer.hide()
      console.error(error);
    }
  }

}
