import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { NotesService } from '../notes.service';
// import { ConsoleComponent } from '../console/console.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  parent: Todo;
  selected: Todo;
  
  private dummyData(): void {
    let n = new Todo(0, 'Root');
    n.appendChild(new Todo(11, 'note 1', ''));
    n.appendChild(new Todo(12, 'note 2', ''));
    n.appendChild(new Todo(13, 'note 3', ''));
    n.appendChild(new Todo(14, 'note 4', ''));
    n.appendChild(new Todo(15, 'note 5', '', 0, [new Todo(151, 'note 5.1', '', 15, [], 0)], 1));
    this.parent = n;
  }
  
  public onSelect(note: Todo, event: any): void {
    this.selected = note;
    console.log(note.name);
    console.log(event);
  }
  
  constructor(private notesService: NotesService) {
  }
  
  getRoot(): void {
    // this.parent = this.notesService.getNotes();
    this.notesService.getRoot()
      .subscribe(parent => {this.parent = parent; console.log(parent)});
  }

  ngOnInit() {
    this.getRoot();
  }

}
