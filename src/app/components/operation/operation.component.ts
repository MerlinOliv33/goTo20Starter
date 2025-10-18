import { Component } from '@angular/core';
import { SumComponent } from '../sum/sum.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operation',
  imports: [SumComponent, FormsModule],
  templateUrl: './operation.component.html',
})
export class OperationComponent {
  x: number = 0;
  y: number = 0;
}
