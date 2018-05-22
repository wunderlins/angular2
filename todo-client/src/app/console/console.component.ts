import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  log(message: string): void {
    document.getElementById("logConsole").setAttribute("value", "\n" + message);
  }

}
