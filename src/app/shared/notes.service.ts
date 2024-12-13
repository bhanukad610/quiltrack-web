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

  addNote(note: Note) {
    this.notes.push(note);
  }

  getNotesCount() {
    return this.notes.length;
  }

  getNoteById(id: number) {
    return this.notes.find((n) => n.id === id);;
  }

  updateNote(id: number, updatedNote: Note): void {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes[index] = { ...updatedNote };
    }
  }
}
