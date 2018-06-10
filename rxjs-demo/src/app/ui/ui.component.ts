import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
  
export class UiComponent implements OnInit, AfterViewInit {
  @ViewChild('input') button: ElementRef;
  @ViewChild('output') textarea: ElementRef;
  @ViewChild('emitter') emitter: ElementRef;
  
  click: Observable<any>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const dblclick = Observable.fromEvent(this.button.nativeElement, 'dblclick');
    const click = Observable.fromEvent(this.button.nativeElement, 'click');
    
    this.click = Observable.merge(dblclick, click);
    this.click.subscribe((evt: MouseEvent) => { 
        console.log(evt);
        this.textarea.nativeElement.value = evt.type + '\n' + this.textarea.nativeElement.value;
      });
    
    this.emitter.nativeElement.addEventListener("click", (evt) => {
      alert(evt);
    });
  }
}
