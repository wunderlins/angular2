import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  parent: Todo;
  
  private dummyData(): void {
    let n = new Todo(0, "Root");
    n.appendChild(new Todo(11, "note 1", ""));
    n.appendChild(new Todo(12, "note 2", ""));
    n.appendChild(new Todo(13, "note 3", ""));
    n.appendChild(new Todo(14, "note 4", ""));
    n.appendChild(new Todo(15, "note 5", "", 0, [new Todo(151, "note 5.1", "", 15, [], 0)], 1));
    this.parent = n;
  }
  
  public onSelect(note: Todo): void {
    console.log(note.name);
  }
  
  constructor(private notesService: NotesService) {
  }
  
  getHeroes(): void {
    //this.parent = this.notesService.getNotes();
    this.notesService.getNotes()
      .subscribe(parent => this.parent = parent);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
