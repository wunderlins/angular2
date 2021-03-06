export enum NodeType {
    ROOT = 0,
    NODE = 1,
    TASK = 10
}

export class Todo {
  public childrenLoaded = false;
  private _dirty = false;
  
  private _id = -1;
  private _type: number;
  private _name: string;
  private _description: string;
  private _parentId = 0;
  private _children: Todo[];
  private _numChildren = 0;
  private _ctime: Date;
  private _mtime: Date;
  public expanded = false;
  
  constructor(
    Pid, Pname, Pdescription = '', PparentId = 0, Pchildren = [], PnumChildren = 0, Pdirty = false
  ) {
    this._id = Pid;
    this._name = Pname;
    this._description = Pdescription;
    this._parentId = PparentId;
    this._children = Pchildren;
    this._numChildren = PnumChildren;
    this._dirty = Pdirty;
  }
  
  toJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      parentId: this.parentId
    };
  }
  
  appendChild(child: Todo) {
    if (child._parentId != this._id) {
      child._parentId = this._id;
      child._dirty = true;
    }
    this._children.push(child);
    this._numChildren = this._children.length;
  }
  
  get id(): number                     {return this._id; }
  get type(): number                   {return this._type; }
  get name(): string                   {return this._name; }
  get description(): string            {return this._description; }
  get parentId(): number               {return this._parentId; }
  get children(): Todo[]               {return this._children; }
  get numChildren(): number            {return this._numChildren; }
  get dirty(): boolean                 {return this._dirty; }
  get ctime(): Date                    {return this._ctime;}
  get mtime(): Date                    {return this._mtime;}
  
  set id(id: number)                   {this._id = id;                   this._dirty = true;}
  set type(node_type: number)          {this._type = node_type;     this._dirty = true;}
  set ctime(dt: Date)                  {this._ctime = dt;                this._dirty = true;}
  set mtime(dt: Date)                  {this._mtime = dt;                this._dirty = true;}
  set name(name: string)               {this._name = name;               this._dirty = true;}
  set description(description: string) {this._description = description; this._dirty = true;}
  set parentId(parentId: number)       {this._parentId = parentId;       this._dirty = true;}
  set children(children: Todo[])       {this._children = children;       this._dirty = true;}
  set numChildren(numChildren: number) {this._numChildren = numChildren; this._dirty = true;}
  set dirty(state: boolean)            {this._dirty = state; }
}
