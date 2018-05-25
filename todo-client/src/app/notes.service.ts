import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};
*/

@Injectable()
export class NotesService {
  
  private url = 'http://localhost:3000/nodes/0';

  constructor(private http: HttpClient) { }
  
  private dummyData(): Todo {
    let n = new Todo(0, "Root");
    n.appendChild(new Todo(11, "note 1", ""));
    n.appendChild(new Todo(12, "note 2", ""));
    n.appendChild(new Todo(13, "note 3", ""));
    n.appendChild(new Todo(14, "note 4", ""));
    n.appendChild(new Todo(15, "note 5", "", 0, [new Todo(151, "note 5.1", "", 15, [], 0)], 1));
    
    return n;  
  }
  
  getNotes(): Observable<Todo> {
    //return of(this.dummyData());
    let root = this.http.get<Todo>(this.url);
    console.log(root);
    return root;
  }

}
