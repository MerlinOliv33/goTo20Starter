import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sum',
  imports: [],
  templateUrl: './sum.component.html',
})
export class SumComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
}
