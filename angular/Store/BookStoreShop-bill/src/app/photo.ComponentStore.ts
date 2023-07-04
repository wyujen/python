import { Injectable } from '@angular/core';

import { ComponentStore } from '@ngrx/component-store';
import { Observable, of, switchMap, tap } from 'rxjs';


export interface Photo {
  id: string;
  url: string;
}
const fakePhoto: Photo[] = [
  { id: '1', url: 'assets/photo/01.JPG' },
  { id: '2', url: 'assets/photo/02.JPG' },
  { id: '3', url: 'assets/photo/03.JPG' },
  { id: '4', url: 'assets/photo/04.JPG' },
  { id: '5', url: 'assets/photo/05.jpg' },
  { id: '6', url: 'assets/photo/06.jpg' },
  { id: '7', url: 'assets/photo/07.jpg' },
  { id: '8', url: 'assets/photo/08.JPG' },
  { id: '9', url: 'assets/photo/09.JPG' },
  { id: '10', url: 'assets/photo/10.JPG' },
]

export interface PhotoCsState {
  PhotoEnties: Photo[]
  actionPhoto:Photo
  PhotoIndex:number
}

@Injectable({
  providedIn: 'root'
})

export class PhotoComponentStore extends ComponentStore<PhotoCsState>{

  constructor() {
    super({
      PhotoEnties: [],
      actionPhoto: { id:"0",url:'0' },
      PhotoIndex:0 
    })
    this.loadPhoto$()
    this.setActionPhoto()
  }

  // =sele==========
  readonly photos$: Observable<Photo[]> = this.select(state => (state.PhotoEnties))
  readonly actionPhoto$: Observable<Photo> = this.select(state =>(state.actionPhoto))
  // ==========sele=
  // ===up==========
  readonly addPhoto = this.updater((state, newPhoto: Photo[]) => {
    const newEntities = [...state.PhotoEnties]
    newPhoto.forEach((photo) => newEntities.push(photo))
    return { ...state, PhotoEnties: newEntities }
  })

  readonly setActionPhoto = this.updater((state) =>{
    const actionPhoto = state.PhotoEnties[state.PhotoIndex]
    return {...state, actionPhoto: actionPhoto}
  })

  readonly getNextPhoto = this.updater((state,n:number) =>{
    let nextIndex = state.PhotoIndex + n
    const IndexLength = state.PhotoEnties.length
    if( nextIndex > IndexLength-1 || nextIndex < 0){
      nextIndex = state.PhotoIndex
    }
    const nextPhoto = state.PhotoEnties[nextIndex]
    console.log(nextPhoto.id)
    return {...state, PhotoIndex: nextIndex, actionPhoto: nextPhoto}
  })

  // ==========up===

  // ==========eff==
  readonly loadPhoto$ = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      switchMap(() =>
        of(fakePhoto).pipe(
          tap(photo => this.addPhoto(photo))
        ))
    )
  })
  // ==eff==========

  
}
