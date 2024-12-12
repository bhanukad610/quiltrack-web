import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [];

  getNotes() {
    return this.notes;
  }

  getfilteredNotes(filterText: string) {
    return this.notes.filter(notes =>
      notes.title.toLowerCase().includes(filterText.toLowerCase()) ||
      notes.content.toLowerCase().includes(filterText.toLowerCase())
    )
  }

  addNote(note: { title: string, content: string }) {
    this.notes.push(note);
  }
}
