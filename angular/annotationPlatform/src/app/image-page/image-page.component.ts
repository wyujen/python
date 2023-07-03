import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageComponentStore } from '../store/image-component-store';
import { Image } from '../type/anntation.interface';
import { Observable } from 'rxjs';
import { DatasetComponentStore } from '../store/dataset-component-store';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit, OnDestroy {

  // deleteSubcription: any
  image$: Observable<Image>
  fianal$: Observable<boolean>

  constructor(
    private _imageCs: ImageComponentStore,
    
  ) {
    this.image$ = this._imageCs.actionImage$
    this.fianal$ = this._imageCs.finalImage$
    // this.deleteSubcription = this.image$.subscribe((date) => console.log(date))
  }
  ngOnInit(): void {

  }

  skip() {
    this._imageCs.skipImage()
  }
  submit() {
    this._imageCs.submitImage()
  }
  update() {
    // 最後一張照片
  }


  ngOnDestroy() {
    // this.deleteSubcription.unsubscribe()
  }

}