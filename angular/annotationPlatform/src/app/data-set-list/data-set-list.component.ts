import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataSet } from '../type/anntation.interface';
import { DatasetComponentStore } from '../store/dataset-component-store';
import { Observable } from 'rxjs';
import { ImageComponentStore } from '../store/image-component-store';



@Component({
  selector: 'app-data-set-list',
  templateUrl: './data-set-list.component.html',
  styleUrls: ['./data-set-list.component.css']
})
export class DataSetListComponent implements OnInit, OnDestroy {

  dataSets$: Observable<DataSet[]>
  dataSets? : DataSet[]
  deleteSubcription :any
  
  

  constructor( 
    private _datasetCs : DatasetComponentStore,
    private _imageCs : ImageComponentStore
    ){
    this.dataSets$ = this._datasetCs.dataSets$

  }
  ngOnInit(): void {
    this.deleteSubcription = this._datasetCs.dataSets$.subscribe((dataset) => this.dataSets = dataset)
    
  }

  setImage(dataset: DataSet): void {
    this._imageCs.loadImage$(dataset.image)
    this._datasetCs.seteditDatasetId(dataset.id)
    
  }

  ngOnDestroy() {
    this.deleteSubcription.unsubscribe()
    
  }


}
