import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  serverCreated = new EventEmitter<{severName: string, serverContent: string}>();
  blueprintCreated = new EventEmitter<{severName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint() {

  }


}
