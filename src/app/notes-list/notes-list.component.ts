import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  imports: [NgFor],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = [
    {title: 'Note 1', content: 'content of note 1'},
    {title: 'Note 2', content: 'content of note 2'},
    {title: 'Note 3', content: 'content of note 3'}
  ];

}
