import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports:[],
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.css']
})
export class AddDatasetComponent {

handleOnChange(e:any){
    console.log('files:', e.target.files);
};
}
