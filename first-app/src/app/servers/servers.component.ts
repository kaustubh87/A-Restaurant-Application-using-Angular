import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  // tslint:disable-next-line:no-inferrable-types
  serverId: number = 10;
  // tslint:disable-next-line:no-inferrable-types
  serverStatus: string = 'online';

  allowNewServer = false;

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  ngOnInit(){

  }



}
