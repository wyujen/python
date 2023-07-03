import { Injectable } from '@angular/core';
import { Image } from '../type/anntation.interface';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, from, map, mergeMap, of, tap } from 'rxjs';

export interface ImageCsState {
  ImageEnties: Image[]
  actionImage: Image
  ImageIndex: number
  finalImage: boolean
}

const InitImageCsState = {
  ImageEnties: [],
  actionImage: {
    id: '0',
    url: '',
    isEdited: false
  },
  ImageIndex: 0,
  finalImage: false
}

@Injectable({
  providedIn: 'root'
})



export class ImageComponentStore extends ComponentStore<ImageCsState>{

  constructor() {
    super(InitImageCsState)
  }

  // ==========select===
  readonly actionImage$: Observable<Image> = this.select(state => (state.actionImage))
  
  readonly finalImage$: Observable<boolean> = this.select(state => (state.finalImage))
  readonly Index$: Observable<number> = this.select(state => (state.ImageIndex))
  // ==select===========

  // ==========updater==
  readonly addImage = this.updater((state, image: Image) => {
    const nextImageEnties = [...state.ImageEnties]
    const addimage = image
    nextImageEnties.push(addimage)
    return { ...state, ImageEnties: nextImageEnties }
  })

  readonly resetImageState = this.updater((state) => {
    return InitImageCsState
  })

  readonly setFinalImage = this.updater((state) => {
    return { ...state, finalImage: true }
  })

  readonly setActionImage = this.updater((state) => {
    const nextImage = state.ImageEnties[state.ImageIndex]
    return { ...state, actionImage: nextImage }
  })

  readonly setNextImageIndex = this.updater((state) => {
    return { ...state, ImageIndex: state.ImageIndex + 1 }
  })

  readonly setImageIsEdited = this.updater((state) => {
    const image = state.actionImage
    image.isEdited = true;

    const images = state.ImageEnties
    images[state.ImageIndex] = image

    return { ...state, ImageEnties: images }
  })


  readonly skipImage = this.updater((state) => {
    if (state.ImageIndex + 1 < state.ImageEnties.length) {
      this.setNextImageIndex()
      this.setActionImage()
    } else {
      this.imagefinal()
    }
    return { ...state }
  })

  readonly submitImage = this.updater((state) => {
    this.setImageIsEdited()
    if (state.ImageIndex + 1 < state.ImageEnties.length) {
      this.setNextImageIndex()
      this.setActionImage()
    } else {
      this.imagefinal()
    }
    return { ...state }
  })





  // ==updater==========


  // ==========effect===

  readonly loadImage$ = this.effect((triggert$: Observable<Image[]>) => {
    return triggert$.pipe(
      tap(() => this.resetImageState()),
      mergeMap((images) => from(images).pipe(
        tap((image) => this.addImage(image)),
        tap(() => this.setActionImage())
      )
      )
    )
  }
  )

  readonly imagefinal = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      tap(() => this.setFinalImage()),
    )
  })
  // ==effect===========


}