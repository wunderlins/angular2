import { Injectable } from '@angular/core';
import { Todo, NodeType } from './todo';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class NotesService {
  
  private rootUrl = environment.apiUrl;
  //private nodeCache<Todo[]>;

  constructor(private http: HttpClient) { }
  
  private dummyData(): Todo {
    let n = new Todo(0, 'Root');
    n.appendChild(new Todo(11, 'note 1', ''));
    n.appendChild(new Todo(12, 'note 2', ''));
    n.appendChild(new Todo(13, 'note 3', ''));
    n.appendChild(new Todo(14, 'note 4', ''));
    n.appendChild(new Todo(15, 'note 5', '', 0, [new Todo(151, 'note 5.1', '', 15, [], 0)], 1));
    
    return n;  
  }
  
  getRoot(): Observable<Todo[]> {
    // return of(this.dummyData());
    let nodeList = this.http.get<Todo[]>(this.rootUrl + '0/children');
    //console.log(nodeList);
    return nodeList;
  }
  
  getNode(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.rootUrl + id);
  }
  
  createNote(v) {
    let node = new Todo(v.id, v.name, v.description, v.parentId, [], v.numChildren, false); 
    node.mtime = new Date(v.mtime);
    node.ctime = new Date(v.ctime);
    node.type = v.node_type
    return node;
  }
  
  getChildren(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.rootUrl + id + '/children');
  }

}
