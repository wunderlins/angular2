export class Todo {
  private childrenLoaded = false;
  private _dirty = false;
  
  private _id = -1;
  private _name: string;
  private _description: string;
  private _parentId = 0;
  private _children: Todo[];
  private _numChildren = 0;
  
  constructor(
    id, name, description = '', parentId = 0, children = [], numChildren = 0, dirty = false
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._parentId = parentId;
    this._children = children;
    this._numChildren = numChildren;
    this._dirty = dirty;
  }
  
  appendChild(child: Todo) {
    if (child._parentId !== this._id) {
      child._parentId = this._id;
      child._dirty = true;
    }
    this._children.push(child);
    this._numChildren++;
    this._dirty = true;
  }
  
  get id(): number { return this._id; }
  get name(): string { return this._name; }
  get description(): string { return this._description; }
  get parentId(): number { return this._parentId; }
  get children(): Todo[] { return this._children; }
  get numChildren(): number { return this._numChildren; }
  get dirty(): boolean { return this._dirty; }
  
  set id(id: number) {
    this._id = id;
    this._dirty = true;
  }
  
  set name(name: string) {
    console.log(name)
    this._name = name;
    this._dirty = true;
  }
  
  set description(description: string) {
    this._description = description;
    this._dirty = true;
  }
  
  set parentId(parentId: number) {
    this._parentId = parentId;
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
