import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  searchedKeyword: string;
  movies: Movie[] = [];
  
  constructor(public movieService: MovieService) { }
  
  ngOnInit(): void {
    this.movieService.getAll().subscribe((data: Movie[])=>{
      this.movies = data;
      console.log(this.movies);
    })  
  }
  
  deleteMovie(id){
    this.movieService.delete(id).subscribe(res => {
         this.movies = this.movies.filter(item => item._id !== id);
         console.log('Movie deleted successfully!');
    })
  }

}
