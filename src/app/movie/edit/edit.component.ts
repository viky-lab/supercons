import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  movie: Movie;
  form: FormGroup;
  
  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['movieId'];
    this.movieService.find(this.id).subscribe((data: Movie)=>{
      this.movie = data;
      console.log(this.movie);
    });
    
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.movieService.update(this.id, this.form.value).subscribe(res => {
         console.log('Movie updated successfully!');
         this.router.navigateByUrl('movie/index');
    })
  }

}
