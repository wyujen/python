import { Component, OnInit } from '@angular/core';

import { Ut } from '../utproject.interface'
import { projectService } from '../project.service';
@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {
  constructor(
    private projectService: projectService){}
  
  Uts : Ut[] = []
  
  
  ngOnInit(): void {
    this.getuts();
  }

  getuts(): void {
    this.Uts =this.projectService.getUts()

  }
}
