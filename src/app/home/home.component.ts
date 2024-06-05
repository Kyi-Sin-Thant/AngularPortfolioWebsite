import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featureProject = {} as Project;
  projectName: string | undefined;
  constructor(private _titleService : Title, private _projectService: ProjectsService){
    this._titleService.setTitle("John Doe - Home");
  }

  ngOnInit(): void {
    this.featureProject = this._projectService.getProjectsById(2);
    this.projectName = this._projectService.getProjectNameById(2);
  }

}
