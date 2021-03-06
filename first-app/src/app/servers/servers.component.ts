import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  username = '';
  serverCreated = false;
  serverStatus: string = 'offline';

  constructor(){
   this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  getServerStatus() {

  }


  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreated= true;
    this.serverCreationStatus = 'Server has been created Name is ' +this.serverName;
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onReset(){
    this.username = '';
  }



}
