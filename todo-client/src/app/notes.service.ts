import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()
export class NotesService {

  constructor() { }
  
  private dummyData(): Todo {
    let n = new Todo(0, "Root");
    n.appendChild(new Todo(11, "note 1", ""));
    n.appendChild(new Todo(12, "note 2", ""));
    n.appendChild(new Todo(13, "note 3", ""));
    n.appendChild(new Todo(14, "note 4", ""));
    n.appendChild(new Todo(15, "note 5", "", 0, [new Todo(151, "note 5.1", "", 15, [], 0)], 1));
    
    return n;  
  }
  
  getNotes(): Todo {
   return this.dummyData();
  }

}
