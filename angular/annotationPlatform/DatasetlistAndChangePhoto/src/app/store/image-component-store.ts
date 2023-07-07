import { Injectable } from '@angular/core';
import { Image } from '../type/anntation.interface';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, from, mergeMap, tap } from 'rxjs';

export interface ImageCsState {
  ImageEnties: Image[]
  ImageIndex: number
  finalImage: boolean
}


const InitImageCsState = {
  ImageEnties: [],
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
  readonly currenImage$: Observable<Image> = this.select(state => (state.ImageEnties[state.ImageIndex]))
  readonly finalImage$: Observable<boolean> = this.select(state => (state.finalImage))
  // ==select===========

  // ==========updater==

  readonly UpdateImage = this.updater((state) => {
    const editImages = [...state.ImageEnties]
    const updatedImage = { ...editImages[state.ImageIndex], isEdited: true }
    editImages[state.ImageIndex] = updatedImage
    return { ...state, ImageEnties: editImages }
  })

  readonly UpdaterIndex = this.updater((state) => {
    const updatedIndex = state.ImageIndex + 1
    if (updatedIndex + 1 > state.ImageEnties.length) {
      const finalImageValue = true
      return { ...state, finalImage: finalImageValue }
    }
    return { ...state, ImageIndex: updatedIndex }
  })

  readonly loadImage = this.updater((state, image: Image[]) => {
    const newImages = image
    return { ...InitImageCsState, ImageEnties: newImages }
  })

  // readonly resetImageState = this.updater((state) => {
  //   return InitImageCsState
  // })
  // ==========updater==
  // ==============effect
  readonly sumbit$ = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      tap(() => {
        this.UpdateImage()
        this.UpdaterIndex()
      })
    )
  })

  readonly skip$ = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      tap(() => this.UpdaterIndex())
    )
  })
  // ==============effect
}