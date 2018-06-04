import { Component, OnInit } from '@angular/core';
import { Todo, NodeType } from '../todo';
import { NotesService } from '../notes.service';
// import { ConsoleComponent } from '../console/console.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  notes: Todo[] = new Array();
  selected: Todo;
  root: Todo;
  
  node: Todo;
  
  private dummyData(): void {
    let n = new Todo(0, 'Root');
    n.appendChild(new Todo(11, 'note 1', ''));
    n.appendChild(new Todo(12, 'note 2', ''));
    n.appendChild(new Todo(13, 'note 3', ''));
    n.appendChild(new Todo(14, 'note 4', ''));
    n.appendChild(new Todo(15, 'note 5', '', 0, [new Todo(151, 'note 5.1', '', 15, [], 0)], 1));
    this.notes = n.children;
  }
  
  public onSelect(note: Todo, event: any): void {
    this.selected = note;
    console.log(note.name);
    console.log(event);
  }
  
  public onExpand(note: Todo, event: any): void {
    if (note.childrenLoaded === false) {
      this.getChildren(note);
      console.log(event.target);
    }
    event.stopPropagation();
  }
  
  constructor(private notesService: NotesService) {
  }
  
  getChildren(n: Todo) {
    if (n.childrenLoaded === true) {
      return;
    }
    
    this.notesService.getChildren(n.id).subscribe(notes => {
      notes.forEach((v, k) => {
        n.appendChild(this.notesService.createNote(v));
      });
      n.childrenLoaded = true;
      console.log(n.children);
    });
  }
  
  getNode(id: number): void {
    this.notesService.getNode(id).subscribe(v => this.node = this.notesService.createNote(v));
  }
  
  getRoot(): void {
    /*
    // this.parent = this.notesService.getNotes();
    this.notesService.getRoot()
      .subscribe(notes => {
        notes.forEach((v, k) => {
          let n = this.notesService.createNote(v);
          this.notes.push(n);
          console.log(n);
        });
      });
    */
    this.notesService.getNode(0).subscribe(v => 
      this.root = this.notesService.createNote(v)
    );
  }
  
  

  ngOnInit() {
    this.getRoot();
  }

}
