import { Component, OnInit } from '@angular/core';
import { Todo, NodeType } from '../todo';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-menu',
  templateUrl: './notes-menu.component.html',
  styleUrls: ['./notes-menu.component.css']
})
export class NotesMenuComponent implements OnInit {

  constructor(private notesService: NotesService) {
    
  }

  ngOnInit() {
  }

}
