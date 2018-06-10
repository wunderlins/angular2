import { Injectable, Output, EventEmitter } from '@angular/core';
import { Todo, NodeType } from './todo';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class NotesService {
  @Output() selectedNode: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() loading: EventEmitter<number> = new EventEmitter<number>(true);
  private _loading = 0;
  
  private rootUrl = environment.apiUrl;
  public nodeCache: Todo[] = [];

  constructor(private http: HttpClient) {
  }
  
  public increaseLoading() {
    this._loading++;
    this.loading.emit(this._loading );
  }
  
  public decreaseLoading() {
    this._loading--;
    this.loading.emit(this._loading);
  }
  
  getRoot(): Observable<Todo[]> {
    // return of(this.dummyData());
    this.increaseLoading();
    return this.http.get<Todo[]>(this.rootUrl + '0/children');
  }
  
  // FIXME: create a node with createNode() after result is fetched.
  getNode(id: number): Observable<Todo> {
    this.increaseLoading();
    return this.http.get<Todo>(this.rootUrl + id);
  }
  
  /**
   * create a Todo Object from response
   */
  createNote(v) {
    let node = new Todo(v.id, v.name, v.description, v.parentId, [], v.numChildren, false); 
    node.mtime = new Date(v.mtime);
    node.ctime = new Date(v.ctime);
    node.type = v.node_type;
    node.dirty = false;
    this.nodeCache[v.id] = node;
    return node;
  }
  
  getParent(node: Todo) {
    if (node.type == NodeType.ROOT) {
      return null;
    }
    // FIXME: load parent if it not yet loaded
    return this.nodeCache[node.parentId];
  }
  
  getChildren(id: number): Observable<Todo[]> {
    this.increaseLoading();
    return this.http.get<Todo[]>(this.rootUrl + id + '/children');
  }

}
