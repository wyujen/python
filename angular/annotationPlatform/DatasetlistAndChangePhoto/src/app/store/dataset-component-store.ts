import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

import { DataSet } from '../type/anntation.interface';
import { Observable, mergeMap, of, tap, withLatestFrom } from 'rxjs';

import { DataService } from '../data.service';
import { fakeDataset } from '../fakeData/dataset';

export interface DataSetCsState {
  dataSetEnties: Record<string, DataSet>

}

const InitDataSetCsState = {
  dataSetEnties: {},

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

  // ==select===========
  // ==========updater==


  
  readonly addDataSet = this.updater((state, dataset: DataSet[]) => {
    const nextDataSet = state.dataSetEnties
    const addataset = [...dataset]
    addataset.map((dataset) => {
      console.log(dataset)
      nextDataSet[dataset.id] = {...dataset }
    })
    return { ...state, dataSetEnties: nextDataSet }
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

  // ==effect===========
}
