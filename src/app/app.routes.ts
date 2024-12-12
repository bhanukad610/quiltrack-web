import { Routes } from '@angular/router';
import { NoteCreationComponent } from './note-creation/note-creation.component';
import { NotesListComponent } from './notes-list/notes-list.component';

export const routes: Routes = [
    {path:'', component: NotesListComponent},
    {path:'create', component:NoteCreationComponent}
];
