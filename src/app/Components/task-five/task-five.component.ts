import { Component } from '@angular/core';
import { HighlightSpanDirective } from '../../highlight-span.directive';

@Component({
  selector: 'app-task-five',
  imports: [HighlightSpanDirective],
  templateUrl: './task-five.component.html',
  styleUrl: './task-five.component.css'
})
export class TaskFiveComponent { }
