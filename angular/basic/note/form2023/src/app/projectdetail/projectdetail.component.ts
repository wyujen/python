import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { Ut } from '../utproject.interface';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit{

  Uts : Ut[] = [];

  constructor(private ProjectServiceService: ProjectServiceService){

  }


 ngOnInit(): void {
   this.getuts();
 }
  getuts(): void {
    this.Uts =this.ProjectServiceService.getUts()

  }
}
