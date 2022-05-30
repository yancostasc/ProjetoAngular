import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NonDeterministicComponent } from '../finiteAutonomous/views/non-deterministic/non-deterministic.component';
import { NonDeterministicRoutingModule } from '../finiteAutonomous/non-deterministic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NonDeterministicRoutingModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [NonDeterministicComponent],
})
export class NonDeterministicModule {}
