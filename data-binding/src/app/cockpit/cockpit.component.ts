import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  @Output() serverCreated = new EventEmitter<{severName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{severName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

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

    this.blueprintCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });

  }


}
