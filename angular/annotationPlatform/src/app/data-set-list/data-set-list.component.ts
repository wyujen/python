import { Component, OnInit } from '@angular/core';
import { DataSet } from '../type/anntation.interface';
import { DatasetComponentStore } from '../store/dataset-component-store';
import { Observable } from 'rxjs';
import { ImageComponentStore } from '../store/image-component-store';




@Component({
  selector: 'app-data-set-list',
  templateUrl: './data-set-list.component.html',
  styleUrls: ['./data-set-list.component.css']
})
export class DataSetListComponent implements OnInit {

  dataSets$?: Observable<DataSet[]>

  constructor(
    private _datasetCs: DatasetComponentStore,
    private _imageCs: ImageComponentStore,

  ){}
  ngOnInit(): void {
    this.dataSets$ = this._datasetCs.dataSets$
  }

  setImage(dataset: DataSet): void {
    this._imageCs.loadImage(dataset.image)}

}
