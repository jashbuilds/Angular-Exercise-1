import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-two',
  imports: [FormsModule],
  templateUrl: './task-two.component.html',
  styleUrl: './task-two.component.css'
})
export class TaskTwoComponent {
  isShowDisabled = signal(true)

  userDetails = signal<any>({
    name: '',
    age: ''
  })

  userName = signal('')
  userAge = signal<number | null>(null)

  isShowClicked = signal(false)
  isShowVisible = signal(true)

  submitDetails(form: NgForm) {
    this.isShowClicked.set(true)
    this.isShowVisible.set(false)

    this.userDetails.set({
      name: this.userName(),
      age: this.userAge()
    })

    form.reset()
  }

  showButton() {
    this.isShowClicked.set(false)
    this.isShowVisible.set(true)
    this.isShowDisabled.set(true)
  }

  validateInput() {
    if (this.userName() !== '' && this.userAge() !== null) {
      this.isShowDisabled.set(false)
    } else {
      this.isShowDisabled.set(true)
    }
  }

  preventDigits(event: KeyboardEvent) {
    if (/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
}
