import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  notes = [
    {title: 'Note1', content: 'This is the content of note 1.'},
    {title: 'Note2', content: 'This is the content of note 2.'},
    {title: 'Note3', content: 'This is the content of note 3.'}
  ];

  onSelectNote(note: any): void {
    console.log('selected note:', note);
  }
}
