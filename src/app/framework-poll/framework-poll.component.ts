import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-framework-poll',
  templateUrl: './framework-poll.component.html',
  styleUrls: ['./framework-poll.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FrameworkPollComponent implements OnInit {
 @Input() username: string;
 @Input() password: string;
 @Input() loginurl: string;
 @Input() data: Array<string>;
 @Output() response: EventEmitter<string> = new EventEmitter<string>();
 constructor() { }

  ngOnInit() {
  }
  login(): void {
    console.log(this.loginurl);
    console.log(this.username);
    console.log(this.password);
    console.log(this.data);
    if (this.username === 'sushil' && this.password === 'sushil') {
      // alert('login Success !!!');
      this.response.emit('login Success!!' + this.username);
    } else {
      // alert('login Failed!!!');
      this.response.emit('login Failed!!' + this.username);
    }
  }
}
