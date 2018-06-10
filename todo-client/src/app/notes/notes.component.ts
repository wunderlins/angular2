import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Todo, NodeType } from '../todo';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';
// import { ConsoleComponent } from '../console/console.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, AfterViewInit {
  
  // @ViewChild('throbber') throbber: ElementRef;
  
  loading = 0;
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
  
  public onSelect(note: Todo): void {
    this.selected = note;
    //console.log("Note: " + note.name);
    //console.log(event);
  }
  
  public onExpand(note: Todo, event: any): void {
    if (note.childrenLoaded === false) {
      this.getChildren(note);
      //console.log(event.target);
    }
    event.stopPropagation();
  }
  
  constructor(private notesService: NotesService) {
  }
  
  ngAfterViewInit() {
    //this.throbber.nativeElement.style.display = 'none';
  }
  
  ngOnInit() {
    this.getRoot();
    this.notesService.selectedNode.subscribe(
      n => {
        this.selected = n;
      }
    );
    this.notesService.loading.subscribe((n) => {
      this.loading = n;
    });
  }
  
  getChildren(n: Todo) {
    if (n.childrenLoaded === true) {
      return;
    }
    
    this.notesService.getChildren(n.id).subscribe(notes => {
      this.notesService.decreaseLoading();
      notes.forEach((v, k) => {
        n.appendChild(this.notesService.createNote(v));
      });
      n.childrenLoaded = true;
      //console.log(n.children);
      //console.log('node cache length: ' + this.notesService.nodeCache.length);
    });
  }
  
  getNode(id: number): void {
    this.notesService.getNode(id).subscribe(v => { 
      this.node = this.notesService.createNote(v);
      this.notesService.decreaseLoading();
    });
  }
  
  getRoot(): void {
    this.notesService.getNode(0).subscribe(v => {
      this.root = this.notesService.createNote(v);
      this.notesService.decreaseLoading();
    });
  }

}
