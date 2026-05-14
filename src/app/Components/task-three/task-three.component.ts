
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-three',
  imports: [FormsModule],
  templateUrl: './task-three.component.html',
  styleUrl: './task-three.component.css'
})
export class TaskThreeComponent {
  isShowClicked = signal(false)

  isShowDisabled = signal(true)

  userDetails = signal<any[]>([{
    name: '',
    age: ''
  }])

  userName = signal('')
  userAge = signal<number | null>(null)

  validateInput() {
    if (this.userName() !== '' && this.userAge() !== null) {
      this.isShowDisabled.set(false)
    } else {
      this.isShowDisabled.set(true)
    }
  }

  submitDetails(form: NgForm) {
    this.isShowClicked.set(true)
    this.isShowDisabled.set(true)

    this.userDetails.set([{
      name: this.userName(),
      age: this.userAge()
    }])

    form.reset()
  }

  preventDigits(event: KeyboardEvent) {
    if (/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }


}
