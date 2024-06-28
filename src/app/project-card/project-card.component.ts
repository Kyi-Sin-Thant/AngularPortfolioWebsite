import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
declare var bootstrap: any;

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})

export class ProjectCardComponent{
  @Input() project= {} as Project;

  constructor(private _projectService: ProjectsService){
    
  }

  sendData(id: any){
      const modal = document.getElementById('projectModal-' + id);
      if (modal) {
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
      } else {
        console.error('Modal element not found.');
      }
  }


}
