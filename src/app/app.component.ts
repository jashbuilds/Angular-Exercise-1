import { Component } from '@angular/core';
import { TaskOneComponent } from "./Components/task-one/task-one.component";
import { TaskTwoComponent } from "./Components/task-two/task-two.component";
import { TaskThreeComponent } from "./Components/task-three/task-three.component";
import { TaskFourComponent } from "./Components/task-four/task-four.component";
import { TaskFiveComponent } from "./Components/task-five/task-five.component";

@Component({
  selector: 'app-root',
  imports: [TaskOneComponent, TaskTwoComponent, TaskThreeComponent, TaskFourComponent, TaskFiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Exercise-1';
}
