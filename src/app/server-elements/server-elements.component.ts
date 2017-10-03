import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements OnInit {
	@Input() servers;
	@Input() header;
	@Output() serverCreated= new EventEmitter();
	serverName;
	serverType;

  constructor() { }

  ngOnInit() {
  	this.servers.push({name: 'Server2',type:'Test'});
  	this.servers.push({name: 'Server3',type:'Test'});
  }

  OnServerAdded(){
  	this.serverCreated.emit({name: this.serverName,type:this.serverType});
  	//console.log(this.serverName);
  	//this.servers.push({name: this.serverName,type:this.serverType});
  	//console.log(this.servers);
  }
}
