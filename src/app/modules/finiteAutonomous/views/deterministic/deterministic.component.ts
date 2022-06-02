import { Component, OnInit } from '@angular/core';
import { unrepeated } from '../../../../shared/utils/number-utils';
import { Automato } from '../../../finiteAutonomous/entities/automato';

@Component({
  selector: 'app-deterministic',
  templateUrl: './deterministic.component.html',
  styleUrls: ['./deterministic.component.css'],
})
export class DeterministicComponent implements OnInit {
  ngOnInit(): void {}

  inputValue: string;
  accept: boolean;
  autonomo: Automato;
  sequence: string[];

  private isEqual(autonomo: Automato, sequence: string[]): boolean {
    return sequence[0].slice(-1).toString() === autonomo.finalState.toString();
  }

  // TODO regex para aceitar apenas 0 e 1.
  onChange(alfabeto) {
    this.inputValue = alfabeto;
    this.sequence = [alfabeto.split('')];

    // No caso deste autonomo, o estado e o alfabeto serão o mesmo.
    this.autonomo = {
      states: unrepeated(alfabeto).split(''),
      alphabet: unrepeated(alfabeto).split(''),
      initialState: alfabeto[0],
      finalState: 0,
    };

    this.evenOddAutonomous(this.autonomo, this.sequence);
  }

  private evenOddAutonomous(autonomo: Automato, sequence: string[]) {
    if (this.isEqual(autonomo, sequence)) {
      return (this.accept = true);
    }
    return (this.accept = false);
  }
}
