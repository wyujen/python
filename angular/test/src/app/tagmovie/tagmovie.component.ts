import { Component, OnInit } from '@angular/core';
import { TagserveService } from './tagserve.service';
import { Movie, Tag, MovieOutput, TagOutput } from './movietag.interface';
import { TAGS, MOVIES } from './movieData'
import { Observable, combineLatest} from 'rxjs';
import { map, filter, toArray, switchMap, mergeMap, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-tagmovie',
  templateUrl: './tagmovie.component.html',
  styleUrls: ['./tagmovie.component.css']
})
export class TagmovieComponent implements OnInit {
  _movies$! : Observable<Movie[]> 
  _tags$! : Observable<Tag[]> 

  moviesOutput!: any
  tagsOutput!: TagOutput[]


  constructor(private _tagServe: TagserveService) { 
    
  }

  ngOnInit() {
    this._movies$ = this._tagServe._movies$;
    this._tags$ = this._tagServe._tags$ 

    this.moviesOutput = combineLatest([this._movies$, this._tags$]).pipe(
      map(([movies, tags]) => {
        return movies.map(movie => ({
          ...movie,
          tagNames: movie.tagid.map(tagid => 
            (tags.find(tag => tag.id === tagid) || {}).name)
        }));
      }),
    )
  }

  








}
