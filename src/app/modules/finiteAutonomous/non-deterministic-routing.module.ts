import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonDeterministicComponent } from '../finiteAutonomous/views/non-deterministic/non-deterministic.component';

const routes: Routes = [
  {
    path: '',
    component: NonDeterministicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonDeterministicRoutingModule {}
