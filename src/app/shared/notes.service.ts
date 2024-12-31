import { Injectable } from '@angular/core';
import { Note } from '../models/note';

const STORAGE_KEY = 'quiltrack-notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [];

  constructor() {
    this.loadNotes();
  }

  private loadNotes(): void {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    this.notes = storedNotes ? JSON.parse(storedNotes) : [];
  }

  getNotes() {
    return this.notes;
  }

  getfilteredNotes(filterText: string) {
    return this.notes.filter(notes =>
      notes.title.toLowerCase().includes(filterText.toLowerCase()) ||
      notes.content.toLowerCase().includes(filterText.toLowerCase())
    )
  }

  private saveNotes(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes));
  }

  addNote(note: Note) {
    note.id = this.generateId();
    this.notes.push(note);
    this.saveNotes();
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
      this.saveNotes();
    }
  }

  private generateId(): number {
    return this.notes.length > 0
      ? Math.max(...this.notes.map(note => note.id)) + 1
      : 1;
  }
}