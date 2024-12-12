import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-creation',
  imports: [FormsModule],
  templateUrl: './note-creation.component.html',
  styleUrl: './note-creation.component.css'
})
export class NoteCreationComponent {
  constructor(private router: Router){}

  note = {title: '', content: ''};

  onSubmit(){
    if(this.note.title != '' || this.note.content != ''){
      console.log('Note created:', this.note);
    }
    
    this.router.navigate(['/']); // Navigate back to the notes list
  }
}
