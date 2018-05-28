export class Todo {
  private childrenLoaded = false;
  private _dirty = false;
  
  private _id = -1;
  private _name: string;
  private _description: string;
  private _parent = 0;
  private _children: Todo[];
  private _numChildren = 0;
  
  constructor(
    id, name, description = '', parent = 0, children = [], numChildren = 0
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._parent = parent;
    this._children = children;
    this._numChildren = numChildren;
    this._dirty = true;
  }
  
  appendChild(child: Todo) {
    if (child._parent !== this._id) {
      child._parent = this._id;
      child._dirty = true;
    }
    this._children.push(child);
    this._numChildren++;
    this._dirty = true;
  }
  
  get id(): number { return this._id; }
  get name(): string { return this._name; }
  get description(): string { return this._description; }
  get parent(): number { return this._parent; }
  get children(): Todo[] { return this._children; }
  get numChildren(): number { return this._numChildren; }
  get dirty(): boolean { return this._dirty; }
  
  set id(id: number) {
    this._id = id;
    this._dirty = true;
  }
  
  set name(name: string) {
    this._name = name;
    this._dirty = true;
  }
  
  set description(description: string) {
    this._description = description;
    this._dirty = true;
  }
  
  set parent(parent: number) {
    this._parent = parent;
    this._dirty = true;
  }
  
  set children(children: Todo[]) {
    this._children = children;
    this._dirty = true;
  }
  
  set numChildren(numChildren: number) {
    this._numChildren = numChildren;
    this._dirty = true;
  }
}
