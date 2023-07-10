import { Injectable } from '@angular/core';

import { Dataset, Ontology, Project } from '../_type&data/project.interface';
import { ComponentStore } from '@ngrx/component-store';

import { Observable, tap } from 'rxjs';

export interface DatasetCsState {
  tempProject: Project
}
const InitDatasetCsState = {
  tempProject: {
    id: '',
    name: '',
    descripthon: '',
    datasetList: {},
    ontology: {
      id: '',
      name: '',
      descripthon: '',
      resList: []
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class ProjectComponentStore extends ComponentStore<DatasetCsState>{


  constructor() {
    super(InitDatasetCsState)
  }

  // ==========sele==
  readonly project$: Observable<Project> = this.select(state => state.tempProject)
  readonly tempdataset$: Observable<Dataset[]> = this.select(state => Object.values(state.tempProject.datasetList))
  // ==sele==========
  // ==========up====
  readonly UpdateTempProject = this.updater((state, project: Project) => {
    return { ...state, tempProject: project }
  })

  readonly tempDelDataset = this.updater((state, deldataset: Dataset) => {
    // 刪除 project 中的 dataset
    const dataset = { ...state.tempProject.datasetList }
    delete dataset[deldataset.id]
    const tempproject = { ...state.tempProject, datasetList: dataset }
    return { ...state, tempProject: tempproject }
  })
  readonly tempAddDataset = this.updater((state, adddataset: Dataset) => {
    // 新增 project 中的 dataset 
    const dataset = { ...state.tempProject.datasetList, [adddataset.id]: adddataset }
    const tempproject = { ...state.tempProject, datasetList: dataset }
    return { ...state, tempProject: tempproject }
  })

  readonly tempDelOntology = this.updater((state) => {
    // 刪除 project 中的 ontology
    const addontology = { ...state.tempProject, ontology: InitDatasetCsState.tempProject.ontology }
    return { ...state, tempProject: addontology }
  })
  readonly SetTempAddOntology = this.updater((state, ontology: Ontology) => {
    // 新增 project 中的 ontology
    const addontology = { ...state.tempProject, ontology: ontology }
    return { ...state, tempProject: addontology }
  })
  // ==up============
  // ==========eff===
  readonly updaterProject = this.effect((project$: Observable<Project>) => {
    return project$.pipe(
      tap((project) => console.log(project))
    )
  })
  // ==eff===========

}
