# Node Web-Service Requirements

## Content-Type:

- application/json
- application/xml maybe?

## Methods

- GET
- DELETE
- PUT -> create
- POST -> update

## Entry Points

- /node/{id}: a node, id 0 == root
- /node/children/{id}
- /person/{id}: a linked person to notes

## Data structures

### Node

- id: long, PK, required
- name: String, required
- description: String (long text, might include markup)
- parent: long, required. -1 == parent of root node. 0 = root node is parent
- numChildren: int, required, read-only
- children: List<Node>, lazy loading

### Person (TODO)
- id, long, PK, required
- name, String, required
- firstname, String
- nick, String
- email, String
- phone, String

