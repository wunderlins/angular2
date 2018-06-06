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
  selected: Todo = null;
  selectedNode = null;
  public nodeType = NodeType;
  
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    if (this.node.type == this.nodeType.ROOT) {
      this.getChildren(this.node);
    }
  }
  
  public onSelect(note: Todo, event: any): void {
    // reset old class
    let t = event.target;
    while (t.tagName !== 'LI') {
      t = t.parentNode;
    }
    
    console.log(t.classList + ' ' + t.tagName);
    if (this.selected !== null) {
      console.log(this.selectedNode.classList);
      this.selectedNode.classList.remove('selected');
    }
    
    t.classList.add('selected');
    this.selected = note;
    this.selectedNode = t;
    event.stopPropagation();
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
    console.log(note);
    if (note.childrenLoaded === false) {
      this.getChildren(note);
      console.log(event.target);
    }
    event.stopPropagation();
  }
  

}
