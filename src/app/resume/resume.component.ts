import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
    
  constructor(private _titleService : Title){
      this._titleService.setTitle("John Doe - Resume");
    }
}
