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
  public isCreating: boolean;

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

  showForm(): boolean {
    if (this.isCreating === true) {
      return (this.isCreating = false);
    }
    return (this.isCreating = true);
  }

  add() {
    const title = this.form.controls['title'].value;
    const description = this.form.controls['description'].value;
    const done = false;
    const edit = false;
    this.tasks.push(new Todo(title, description, done, edit));
    console.log(localStorage.getItem('tasks'));
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
    this.tasks.splice(index, 1);
    this.localSave();
  }

  markAsDone(todo: Todo) {
    if (todo.done === true) {
      todo.done = false;
    } else {
      todo.done = true;
    }
    this.localSave();
  }

  markAsEdit(todo: Todo) {
    if (todo.edit === true) {
      return (todo.edit = false);
    }
    return (todo.edit = true);
  }

  changeFn(value, todo: Todo, isTitle: boolean) {
    const newValue = value.target.value;

    if (isTitle === true) {
      todo.title = newValue;
    } else {
      todo.description = newValue;
    }
  }
}
