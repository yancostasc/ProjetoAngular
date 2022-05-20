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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
