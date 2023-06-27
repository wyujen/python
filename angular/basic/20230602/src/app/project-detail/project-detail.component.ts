import { Component } from '@angular/core';
import { Ut } from '../utproject.interface';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  constructor(
    private projectService: ProjectService
    ){}
  
  Uts : Ut[] = []
  
  
  ngOnInit(): void {
    this.getuts();
  }

  getuts(): void {
    this.Uts =this.projectService.getUts()

  }

}
