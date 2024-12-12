import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../shared/notes.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-creation',
  imports: [FormsModule],
  templateUrl: './note-creation.component.html',
  styleUrl: './note-creation.component.css'
})
export class NoteCreationComponent {
  constructor(private router: Router, private notesService: NotesService) { }

  note : Note = new Note('', '');

  onSubmit() {
    if (this.note.title != '' || this.note.content != '') {
      this.notesService.addNote(this.note);
      this.navigateToHome();
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
