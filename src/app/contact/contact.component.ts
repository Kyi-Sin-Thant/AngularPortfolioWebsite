import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    
  constructor(private _titleService : Title){
      this._titleService.setTitle("John Doe - Contact");
    }
}
