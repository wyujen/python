import { Injectable, OnInit } from '@angular/core';
import { Dataset, Ontology } from './_type&data/project.interface';
import { Observable, of } from 'rxjs';
import { fakeDataset, fakeOntology } from './_type&data/fakedata';



@Injectable({
  providedIn: 'root'
})
export class EntiteService implements OnInit {

  dataset$?: Observable<Dataset[]> 
  ontology$?: Observable<Ontology[]>

  constructor() { }


  ngOnInit() {}

  getDatasets(): Observable<Dataset[]>{
    return of(Object.values(fakeDataset));
  }
  
  getOntologys(): Observable<Ontology[]>{
    return of(Object.values(fakeOntology));
  }

}
