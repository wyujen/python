import { Injectable, OnInit } from '@angular/core';

import { TAGS, MOVIES } from './movieData'
import { Movie, Tag, MovieOutput, TagOutput } from './movietag.interface';

import { from, of, Observable } from 'rxjs';
import { map, toArray,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagserveService {
  Movies : Movie[] = MOVIES;
  Tags : Tag[] = TAGS;
  MoviesOutput: MovieOutput[] = []

  readonly _movies$ = of(MOVIES);
  readonly _tags$ = of(TAGS);
  
  constructor(
    
  ) { }

  

}
