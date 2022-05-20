import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeterministicComponent } from '../finiteAutonomous/views/deterministic/deterministic.component';
import { DeterministicRoutingModule } from '../finiteAutonomous/deterministic-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DeterministicRoutingModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [DeterministicComponent],
})
export class DeterministicModule {}
