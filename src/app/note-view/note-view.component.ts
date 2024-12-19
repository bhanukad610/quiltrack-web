import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-view',
  imports: [FormsModule],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.css'
})
export class NoteViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router
  ) { }

  note: Note | undefined;

  ngOnInit(): void {
    const noteId = +this.route.snapshot.paramMap.get('id')!;
    this.note = this.notesService.getNoteById(noteId);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (!this.note?.title?.trim() && !this.note?.content?.trim()) {
      alert('Both title and content are required!');
      return;
    }

    if (this.note) {
      this.notesService.updateNote(this.note.id, this.note);
    }
    this.goBack();
  }
}
