import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
  
export class UiComponent implements OnInit, AfterViewInit {
  @ViewChild('input') button: ElementRef;
  @ViewChild('output') textarea: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let click$ = Observable.fromEvent(this.button.nativeElement, 'click')
        .subscribe((evt: MouseEvent) => {
          console.log(evt);
          this.textarea.nativeElement.value = evt.type + "\n" + this.textarea.nativeElement.value; 
        });
    
    let dblclick$ = Observable.fromEvent(this.button.nativeElement, 'dblclick')
        .subscribe((evt: MouseEvent) => {
          console.log(evt);
          this.textarea.nativeElement.value = evt.type + "\n" + this.textarea.nativeElement.value; 
        });
  }
}
