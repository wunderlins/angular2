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
  public expanded = false;
  public childrenLoaded = false;
  public open = false;
  
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    if (this.node.type === this.nodeType.ROOT) {
      this.getChildren(this.node);
    }
  }
  
  public isRootNode(node: Todo): boolean {
    return (node.type === this.nodeType.ROOT || this.getParent(node).type === this.nodeType.ROOT);  
  }
  
  public getParent(node: Todo): Todo {
    return this.notesService.getParent(node);
  }
  
  public onSelect(note: Todo, event: any): void {
    // reset old class
    let t = event.target;
    while (t.tagName !== 'LI') {
      t = t.parentNode;
    }

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
      this.childrenLoaded = true;
    });
  }
  
  public onExpand(note: Todo, event: any): void {
    // make sure the data is loaded
    if (note.childrenLoaded === false) {
      this.getChildren(note);
      console.log(event.target);
    }
    
    // this event is handled.
    event.stopPropagation();
    
    // reverse state
    this.open = (this.open) ? false : true;
    
    
    // find next ul tag, this is the container for the children
    /*
    let t = event.target;
    while (t.tagName !== 'LI') {
      t = t.parentNode;
    }
    console.log('searching li: ' + t.innerHTML);
    
    let s = t;
    while (s.tagName !== 'UL') {
      console.log('searching ul: ' + s.nodeType);
      if (s.tagName) {
        console.log('--> Tag: ' + s.tagName);
      }
      
      if (!s.nextSibling) {
        console.log('Error: ran out of tags while searching sibling UL for LI');
        return;
      }
      s = s.nextSibling;
    }
    */
  }
  

}
