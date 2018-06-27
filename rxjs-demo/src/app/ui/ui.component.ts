import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/observable/fromEvent';
import { HttpClient } from '@angular/common/http';
import { Node } from '../node';
import { User } from '../user';
import { GithubUserList } from '../githubuserlist';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})

export class UiComponent implements OnInit, AfterViewInit {
  @ViewChild('input') button: ElementRef;
  @ViewChild('output') textarea: ElementRef;
  @ViewChild('emitter') emitter: ElementRef;
  @ViewChild('textoutput') textoutput: ElementRef;
  
  click: Observable<any>;
  nodes: Array<Node> = [];
  
  users: Array<User> = [];
  
  private searchField: FormControl;
  private githubUserControl: FormControl;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	// capture user input from text field
		this.searchField = new FormControl();
		this.searchField.valueChanges
			.debounceTime(20)
			.distinctUntilChanged()
			.subscribe((data) => { // Need to call subscribe to make it hot!
				//console.log(data);
				if (data === "")
					data = "...";
				this.textoutput.nativeElement.innerHTML = data;
		});
		
		this.githubUserControl = new FormControl();
		this.githubUserControl.valueChanges
			.debounceTime(400)
			.distinctUntilChanged()
			.subscribe((searchTerm) => { // Need to call subscribe to make it hot!
				console.log("searching for " + searchTerm);
				this.getUsers(searchTerm);
		});
		
  }
  
	displayInteger(i) {
		let ret = Math.round(i); 
		console.log(i + " " + ret);
		return ret;
	}
  
  getUsers(query: String) {
  	if (query == "") {
  		this.users = [];
  		return;
  	}
  
  	this.http.get<GithubUserList>("https://api.github.com/search/users?q=" + query)
  		.subscribe((data) => {
    	// console.log(data.items)
    	this.users = [];
			for (let entry of data.items) {
				//console.log(entry); // 1, "string", false
				let u = new User();
				u.id = entry.id;
				u.login = entry.login;
				u.score = entry.score;
				this.users.push(u);
			}
			console.log(this.users);
    });
  }
  
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
