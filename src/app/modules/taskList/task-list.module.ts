import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListRoutingModule } from '../taskList/task-list-routing.module';
import { TaskListComponent } from '../taskList/view/task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    TaskListRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [TaskListComponent],
})
export class TaskListModule {}
