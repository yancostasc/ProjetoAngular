import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Todo } from '../../../taskList/entities/todo';
import { TaskListRoutingModule } from '../../../taskList/task-list-routing.module';
import { TaskListComponent } from '../../../taskList/view/task-list/task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TaskListRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
      ],
      declarations: [TaskListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  //teste para function add

  //teste para function clear

  //teste para function localSave

  //teste para function remove
});
