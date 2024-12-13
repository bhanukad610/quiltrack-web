import { Routes } from '@angular/router';
import { NoteCreationComponent } from './note-creation/note-creation.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteViewComponent } from './note-view/note-view.component';

export const routes: Routes = [
    { path: '', component: NotesListComponent },
    { path: 'create', component: NoteCreationComponent },
    { path: 'view/:id', component: NoteViewComponent }
];
