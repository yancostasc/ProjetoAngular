import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../../taskList/entities/todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  public tasks: Todo[] = [];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: [
        '',
        Validators.compose([Validators.minLength(1), Validators.required]),
      ],
      description: [''],
    });
  }

  ngOnInit(): void {
    const storagedTasks = localStorage.getItem('tasks');
    this.tasks = JSON.parse(storagedTasks);
  }

  add() {
    const title = this.form.controls['title'].value;
    const description = this.form.controls['description'].value;
    this.tasks.push(new Todo(title, description));
    this.localSave();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  localSave() {
    const data = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', data);
  }

  remove(todo: Todo) {
    const index = this.tasks.indexOf(todo);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
