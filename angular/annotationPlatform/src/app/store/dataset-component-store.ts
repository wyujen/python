import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

import { DataSet, Image } from '../type/anntation.interface';
import { Observable, mergeMap, of, tap, withLatestFrom } from 'rxjs';

import { DataService } from '../data.service';

export interface DataSetCsState {
  dataSetEnties: Record<string, DataSet>
  editDatasetId: string
}

const InitDataSetCsState = {
  dataSetEnties: {},
  editDatasetId: ''
}
@Injectable({
  providedIn: 'root'
})
export class DatasetComponentStore extends ComponentStore<DataSetCsState>{

  constructor(
    private dataService: DataService
  ) {
    super(
      InitDataSetCsState
    )
    this.loadDataSet$()
  }

  // ==========select===
  readonly dataSets$: Observable<DataSet[]> = this.select(state => Object.values(state.dataSetEnties))
  readonly editId$: Observable<string> = this.select(state => (state.editDatasetId))
  // ==select===========
  // ==========updater==
  readonly addDataSet = this.updater((state, dataset: DataSet[]) => {
    const nextDataSet = state.dataSetEnties
    dataset.map((dataset) => {
      nextDataSet[dataset.id] = dataset
    })
    return { ...state, dataSetEnties: nextDataSet }
  })

  readonly seteditDatasetId = this.updater((state, editId: string) => {
    return { ...state, editDatasetId: editId }
  })


  readonly restState = this.updater((state)=>{
    return InitDataSetCsState
  })




  // ==updater==========

  // ==========effect===

  readonly loadDataSet$ = this.effect((void$: Observable<void>) => {
    return void$.pipe(
      mergeMap(() => {
        const fakedata: DataSet[] = this.dataService.getDataSets()
        return of(fakedata).pipe(
          tap((dataset) => this.addDataSet(dataset)))
      }))
  })

  readonly updateImage$ = this.effect((taggat$: Observable<Image[]>) => {
    return taggat$.pipe(
      withLatestFrom(this.editId$),
      tap(([images, id]) => {
        this.dataService.updateDataSet(id, images);
      }),
      tap(()=>{
        this.restState()
        this.loadDataSet$()
      })
    )
  });


  // ==effect===========
}
