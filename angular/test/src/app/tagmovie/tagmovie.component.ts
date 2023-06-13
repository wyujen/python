import { Component, OnInit } from '@angular/core';
import { TagserveService } from './tagserve.service';
import { Movie, Tag, MovieOutput, TagOutput } from './movietag.interface';
import { TAGS, MOVIES } from './movieData'
import { Observable, combineLatest, concat, forkJoin, zip} from 'rxjs';
import { map, filter, toArray, switchMap, mergeMap, mergeAll, withLatestFrom, tap } from 'rxjs/operators';

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

    // 1.
    // this.moviesOutput = combineLatest([this._movies$, this._tags$]).pipe(
    //   map(([movies, tags]) => {
    //     return movies.map(movie => ({
    //       ...movie,
    //       tagNames: movie.tagid.map(tagid => 
    //         (tags.find(tag => tag.id === tagid) || {}).name)
    //     }));
    //   }),
    // )

    // 2.
    // this.moviesOutput = this._movies$.pipe(
    //   withLatestFrom(this._tags$),
    //   map(([movies, tags]) => {
    //     return movies.map(movie => ({
    //       ...movie,
    //       tagNames: movie.tagid.map(tagid => 
    //         (tags.find(tag => tag.id === tagid) || {}).name)
    //     }));
    //   }),
    // )

    // 3.
    // this.moviesOutput = zip(this._movies$, this._tags$).pipe(
    //   map(([movies, tags]) => {
    //     return movies.map(movie => ({
    //       ...movie,
    //       tagNames: movie.tagid.map(tagid => 
    //         (tags.find(tag => tag.id === tagid) || {}).name)
    //     }));
    //   }),
    // )

    // 4
    this.moviesOutput = forkJoin([this._movies$, this._tags$]).pipe(
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
