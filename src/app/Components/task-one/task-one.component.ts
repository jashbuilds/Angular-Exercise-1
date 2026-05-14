import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

  enableLengthButton() {
    if(this.inputVal() !== '') {
      this.isSubmitDisabled.set(false)
    } else {
      this.isSubmitDisabled.set(true)
    }
  }

  calculateLength(form: NgForm) {
    this.inputLength.set(String(this.inputVal().length))
    this.isSubmitClicked.set(true)
    this.isSubmitDisabled.set(true)
    form.reset()
  }

}
