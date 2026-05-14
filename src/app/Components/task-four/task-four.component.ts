import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-four',
  imports: [FormsModule],
  templateUrl: './task-four.component.html',
  styleUrl: './task-four.component.css'
})
export class TaskFourComponent {
  isSubmitClicked = signal(false)

  userInput = signal<number | null>(null)

  numberOutput = signal<any>(null)

  validateInput() {
    return (
      this.userInput() !== null
    )
  }

  onSubmit(form: NgForm) {
    this.isSubmitClicked.set(true)

    this.numberOutput.set(this.userInput())
    form.reset()
  }
}
