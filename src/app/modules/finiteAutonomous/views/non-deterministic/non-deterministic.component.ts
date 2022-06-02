import { Component, OnInit } from '@angular/core';
import { Automato } from '../../../finiteAutonomous/entities/automato';

@Component({
  selector: 'app-non-deterministic',
  templateUrl: './non-deterministic.component.html',
  styleUrls: ['./non-deterministic.component.css'],
})
export class NonDeterministicComponent implements OnInit {
  inputValue: string;
  accept: boolean;
  autonomo: Automato;
  sequence: string[];
  countCopy: number;

  ngOnInit(): void {}

  onChange(alfabeto) {
    this.inputValue = alfabeto;
    this.sequence = [alfabeto.split('')];

    this.autonomo = {
      states: ['q1', 'q2', 'q3', 'q4'],
      alphabet: ['0', '1'],
      initialState: 'q1',
      finalState: 'q4',
    };

    this.runAfnd(this.autonomo, this.sequence);
  }

  runAfnd(autonomo: Automato, sequence: string[]) {
    const firstIndex = sequence[0].toString();
    const valueZero = autonomo.alphabet[0].toString();

    if (this.isEqualZero(firstIndex, valueZero)) {
      console.log('estado atual: q1');
      this.accept = false;

      this.nextStates(autonomo, sequence);
    }
  }

  nextStates(autonomo, sequence) {
    const lastIndex = sequence[0].slice(-1).toString();
    const valueZero = autonomo.alphabet[0].toString();
    const valueOne = autonomo.alphabet[1].toString();

    console.log(lastIndex, valueOne);
    if (this.isEqualOne(lastIndex, valueOne)) {
      console.log('estado atual: q2');

      if (this.isEqualZero(lastIndex, valueZero)) {
        console.log('estado atual: q3');

        if (this.isEqualOne(lastIndex, valueOne)) {
          console.log('estado atual: q4');
          this.accept = true;
        }
      }
    }
  }

  isEqualZero(index, valueZero): boolean {
    return index === valueZero;
  }

  isEqualOne(index, valueOne): boolean {
    return index === valueOne;
  }
}
