import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class NotesService {
  
  private rootUrl = environment.apiUrl;

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
  
  getChildren(id: number): Todo[] {
    let ret = <Todo[]>[];
    let children = this.http.get<Todo[]>(this.rootUrl + id + '/children')
      .subscribe(notes => {
        notes.forEach((v, k) => {
          // console.log(`${k}: ${v}`);
          let n: Todo = new Todo(v.id, v.name, v.description, v.parentId, [], v.numChildren, false);
          ret.push(n);
          // console.log(n);
        });
        return notes;
     });
    console.log(ret);
    return ret;
  }

}
