import { Component, OnInit, Input } from '@angular/core';
import { Todo, NodeType } from '../todo';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() node: Todo;
  
  constructor(private notesService: NotesService) { }

  ngOnInit() {
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
  
  
  public onExpand(note: Todo, event: any): void {
    if (note.childrenLoaded === false) {
      this.getChildren(note);
      console.log(event.target);
    }
    event.stopPropagation();
  }
  

}
