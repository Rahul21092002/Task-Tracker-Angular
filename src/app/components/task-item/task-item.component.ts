import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialIcon } from 'material-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: any
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes 

  constructor() { }
 
  ngOnInit(): void {
  } 

  onDelete(task: Task){  
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task)
  }

}
