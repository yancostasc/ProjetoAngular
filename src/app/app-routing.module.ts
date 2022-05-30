import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'deterministic',
  },
  {
    path: 'deterministic',
    loadChildren: () =>
      import('./modules/finiteAutonomous/deterministic.module').then(
        (m) => m.DeterministicModule
      ),
  },
  {
    path: 'non-deterministic',
    loadChildren: () =>
      import('./modules/finiteAutonomous/non-deterministic.module').then(
        (m) => m.NonDeterministicModule
      ),
  },
  {
    path: 'task-list',
    loadChildren: () =>
      import('./modules/taskList/task-list.module').then(
        (m) => m.TaskListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
