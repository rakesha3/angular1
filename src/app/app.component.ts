import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  servers = [{name: 'Server1',type:'Test'}];
  header = {name:"Home"};

  OnServerAdded(serverData){
  	//console.log(serverData);
  	this.servers.push({name:serverData.name,type:serverData.type})
  }
}
