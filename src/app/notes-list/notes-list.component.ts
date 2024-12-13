import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-notes-list',
  imports: [NgFor, FormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  constructor(private router: Router, private notesService: NotesService){}

  filterText = '';

  get filteredNotes(){
    return this.notesService.getfilteredNotes(this.filterText);
  }

  navigateToCreate(){
    this.router.navigate(['/create']);
  }

  viewNote(id:number){
    this.router.navigate(['/view', id]);
  }

}
