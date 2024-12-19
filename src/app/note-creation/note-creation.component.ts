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

  note = { title: '', content: '' };

  onSubmit() {
    if (this.note.title.trim() || this.note.content.trim()) {
      let noteObj = new Note(this.notesService.getNotesCount() + 1, this.note.title, this.note.content);
      this.notesService.addNote(noteObj);
      this.navigateToHome();
    }
    else{
      alert('Title and content cannot be empty.');
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
