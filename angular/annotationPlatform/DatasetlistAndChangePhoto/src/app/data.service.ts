import { Injectable } from '@angular/core';
import { fakeDataset } from './fakeData/dataset';
import { DataSet, Image } from './type/anntation.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSets: DataSet[] = fakeDataset

  constructor() { }

  getDataSets() {
    const fakedata = [...this.dataSets]
    return fakedata
  }

  // updateDataSet(id: string, newimage: Image[]) {
  //   this.dataSets = this.dataSets.map(dataSet => {
  //     if (dataSet.id === id) {
  //       return { ...dataSet, image: newimage, isEdited:true }
  //     } else {
  //       return dataSet
  //     }
  //   })
  // }
}
