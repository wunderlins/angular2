import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo, NodeType } from '../todo';
import { NotesService } from '../notes.service';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  /**
   * The approach for staving state of the selected node might break if this component is used 
   * multiple times in a module.
   */
  public static selected: Todo = null;
  public static selectedDOMNode = null;
  
  @Input() node: Todo;
  
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
  
  public buttonClasses(node: Todo) {
    let none = (node.numChildren === 0);
    return {
      'expanded': (this.open && !none), 
      'collapsed': (!this.open && !none),
      'none': none
      };
  }
  
  public nodeClasses(node: Todo): Object {
    return {
      'treeroot': (node.type === NodeType.ROOT),
      'open': this.open
    };
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
    
    if (TreeNodeComponent.selected !== null) {
      TreeNodeComponent.selectedDOMNode.classList.remove('selected');
    }
    
    t.classList.add('selected');
    TreeNodeComponent.selected = note;
    this.notesService.selectedNode.emit(note);
    // console.log([this.selectedNode, note]);
    TreeNodeComponent.selectedDOMNode = t;
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
      this.open = true;
      //console.log(n.children);
      this.childrenLoaded = true;
    });
  }
  
  public onExpand(note: Todo, event: any): void {
    // make sure the data is loaded
    if (note.childrenLoaded === false) {
      this.getChildren(note);
      // console.log(event.target);
    }
    
    // this event is handled.
    event.stopPropagation();
    
    // reverse state
    this.open = (this.open) ? false : true;
  }
  

}
