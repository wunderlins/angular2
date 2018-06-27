import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/observable/fromEvent';
import { HttpClient } from '@angular/common/http';
import { Node } from '../node';

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
  nodes: Array<Node> = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {}
  
  getNode(): Observable<Node> {
  	return this.http.get<Node>("http://localhost:3000/node");
	}
	
	fetchNode() {
    this.getNode().subscribe((data) => {
    	this.nodes[data.id] = data;
    	console.log(this.nodes[data.id])
    });
	}

  ngAfterViewInit() {
    const dblclick = Observable.fromEvent(this.button.nativeElement, 'dblclick');
    const click = Observable.fromEvent(this.button.nativeElement, 'click');
    
    this.click = Observable.merge(dblclick, click);
    this.click.subscribe((evt: MouseEvent) => { 
      console.log(evt);
      this.textarea.nativeElement.value = evt.type + '\n' + this.textarea.nativeElement.value;
    });
    
    const fetchData = Observable.fromEvent(this.emitter.nativeElement, 'click');
    fetchData.subscribe((evt: MouseEvent) => { 
      console.log(evt);
      this.fetchNode();
    });
    
    this.http.get<Node[]>("http://localhost:3000/node5")
    	.subscribe((data) => {
    		this.nodes = data;
    		//console.log(data);
    });
  }
}
