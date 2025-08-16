import { Input,Component,  EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child  implements OnChanges{
@Input() valueFromParent: string = '';
@Output() SendDataToParent:EventEmitter<string>=new EventEmitter
sayHello(){
  this.SendDataToParent.emit('hello');
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
}
