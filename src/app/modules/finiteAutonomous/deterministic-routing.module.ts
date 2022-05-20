import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeterministicComponent } from '../finiteAutonomous/views/deterministic/deterministic.component';

const routes: Routes = [
  {
    path: '',
    component: DeterministicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeterministicRoutingModule {}
