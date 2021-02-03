import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: string;
  movie: Movie;
   
  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['movieId'];
      
    this.movieService.find(this.id).subscribe((data: Movie)=>{
      this.movie = data;
    });
  }

}
