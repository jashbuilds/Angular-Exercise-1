import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-four',
  imports: [FormsModule],
  templateUrl: './task-four.component.html',
  styleUrl: './task-four.component.css'
})
export class TaskFourComponent {
  isShowClicked = signal(false)
  isShowDisabled = signal(true)

  userInput = signal<number | null>(null)

  numberOutput = signal<any>(null)

  validateInput() {
    if (this.userInput() !== null) {
      this.isShowDisabled.set(false)
    } else {
      this.isShowDisabled.set(true)
    }
  }

  onSubmit() {
    this.isShowDisabled.set(true)
    this.isShowClicked.set(true)

    this.numberOutput.set(this.userInput())
    this.userInput.set(null)
  }
}
