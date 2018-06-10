import { Component, OnInit, Input } from '@angular/core';
import { Todo, NodeType } from '../todo';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})

export class NotesDetailComponent implements OnInit {
  @Input() note: Todo;
  
  constructor(private notesService: NotesService) { }
  onCancel(id: number) {
    alert("TBD: reset");
  }
  
  ngOnInit() {
    
  }

}
