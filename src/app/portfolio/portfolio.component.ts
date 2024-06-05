import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  
  projects = {} as Project[];

  constructor(private _titleService : Title, private _projectService : ProjectsService){
      this._titleService.setTitle("John Doe - Portfolio");
    }

    ngOnInit(): void{
      this.projects = this._projectService.getProjects();
    }
}
