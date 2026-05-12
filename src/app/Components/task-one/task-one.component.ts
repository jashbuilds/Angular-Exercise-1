import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-one',
  imports: [FormsModule],
  templateUrl: './task-one.component.html',
  styleUrl: './task-one.component.css'
})
export class TaskOneComponent {

  inputVal = signal('')
  inputLength = signal('')
  isSubmitDisabled = signal(true)
  isSubmitClicked = signal(false)

  enableLength() {
    if(this.inputVal() === '') {
      this.isSubmitDisabled.set(true)
    } else {
      this.isSubmitDisabled.set(false)
    }
  }

  calculateLength() {
    this.inputLength.set(String(this.inputVal().length))
    this.isSubmitClicked.set(true)
    this.isSubmitDisabled.set(true)
    this.inputVal.set('')
  }
}
