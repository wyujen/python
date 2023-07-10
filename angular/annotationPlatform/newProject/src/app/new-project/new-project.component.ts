import { Component, OnInit } from '@angular/core';

import { Observable, combineLatest, filter, from, map, of, switchMap, tap } from 'rxjs';
import { Dataset, Ontology, Project } from '../_type&data/project.interface';
import { EntiteService } from '../entite.service';

import { ProjectComponentStore } from '../Store/project.componentstore';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projectForm = this._fb.group({
    name: ['', Validators.required],
    descripthon: ['', Validators.required],
    datasetList:{},
    ontology:{},
    datasetListValue: [0,Validators.min(1)]
  })
  nameReady: boolean = false
  isAdd: boolean = false
  datasets$?: Observable<Dataset[]>
  ontology$?: Observable<Ontology[]>
  tempProject?: Project
  datasetArray?: Dataset[]

  constructor(
    private entiteService: EntiteService,
    private projectCs: ProjectComponentStore,
    private _fb: FormBuilder
  ) {

  }
  ngOnInit() {

    this.projectCs.project$.subscribe((project) => {
      this.tempProject = project
      this.datasetArray = Object.values(project.datasetList)
    })

    this.datasets$ = combineLatest([
      this.entiteService.getDatasets(),
      this.projectCs.project$
    ]).pipe(
      map(([datasets, project]) => {
        const datasetArray = Object.values(project.datasetList);
        return datasets.filter(dataset =>
          !datasetArray.some(arrayDataset => arrayDataset.id === dataset.id))
      })
    )

    this.ontology$ = combineLatest([
      this.entiteService.getOntologys(),
      this.projectCs.project$
    ]).pipe(
      map(([ontologys, project]) => {
        const ontology = project.ontology
        if (ontology) {
          return ontologys.filter(ontologyItem => ontology.id !== ontologyItem.id)
        } else {
          return ontologys
        }
      }))
  }

  setFormValue() {
    this.projectForm.patchValue({
      name: this.tempProject?.name,
      descripthon: this.tempProject?.descripthon,
      datasetList: this.tempProject?.datasetList,
      datasetListValue: this.datasetArray?.length
    })
  }

  nextStep() {
    this.updateTempProject()
    this.nameReady = true
  }
  beforeStep() {
    this.nameReady = false
    this.setFormValue()
  }

  updateTempProject() {
    console.log(this.projectForm.value)
    let project = this.projectForm.value 
    delete project['datasetListValue']
    console.log(0,project)
    
    const finalproject = project as Project
    // const finalproject = this.projectForm.value  as Project
    this.projectCs.UpdateTempProject(finalproject)
  }

  clickAddDataset(dataset: Dataset) {
    this.updateTempProject()
    this.projectCs.tempAddDataset(dataset)
    this.setFormValue()
  }
  clickDelDataset(dataset: Dataset) {
    this.projectCs.tempDelDataset(dataset)
    this.setFormValue()
  }
  clickAddOntology(ontology: Ontology) {
    this.projectCs.SetTempAddOntology(ontology)
    this.setFormValue()
  }
  clickDelOntology() {
    this.projectCs.tempDelOntology()
    this.setFormValue()
  }
}
