import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() childVar: string;

  @Output() public childEvent = new EventEmitter();
  public firevent(){
    this.childEvent.emit('Hey data from Child');
  }
}
