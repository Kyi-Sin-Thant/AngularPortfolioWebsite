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
  typescript: boolean = false;
  java:boolean = false;
  csharp:boolean = false;
  javascript:boolean = false;
  vbnet:boolean = false;
  php: boolean = false;
  angular: boolean = false;
  net: boolean = false;
  react: boolean = false;
  filtering: boolean = false;
  

  constructor(private _titleService : Title, private _projectService : ProjectsService){
      this._titleService.setTitle("John Doe - Portfolio");
    }

    ngOnInit(): void{
      this.projects = this._projectService.getProjects();
    }

    Filter(){
      let filterTags = [];
      if(this.typescript){
        filterTags.push(Tag.TYPESCRIPT);
      }
      if(this.java){
        filterTags.push(Tag.JAVA);
      }
      if(this.csharp){
        filterTags.push(Tag.CSHARP);
      }
      if(this.javascript){
        filterTags.push(Tag.JAVASCRIPT);
      }
      if(this.vbnet){
        filterTags.push(Tag.VBNET);
      }
      if(this.php){
        filterTags.push(Tag.PHP);
      }
      if(this.angular){
        filterTags.push(Tag.ANGULAR);
      }
      if(this.net){
        filterTags.push(Tag.ASPNET);
      }
      if(this.react){
        filterTags.push(Tag.REACT);
      }

      if(filterTags.length > 0){
        this.filtering = true;
      }else{
        this.filtering = false;
      }

      this.projects = this._projectService.getProjectByFilter(filterTags);
    }

    ResetFilter(){
      this.typescript = false;
      this.java = false;
      this.csharp = false;
      this.javascript = false;
      this.vbnet = false;
      this.php = false;
      this.angular = false;
      this.net = false;
      this.react = false;
      this.filtering = false;

      this.projects = this._projectService.getProjects();
    }
}
