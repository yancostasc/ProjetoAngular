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
    const lastIndex = sequence[0].slice(-1).toString();

    while (lastIndex === autonomo.alphabet[0]) {
      console.log('estado atual: q1');

      if (lastIndex === autonomo.alphabet[1]) {
        console.log('estado atual: q2');

        
      }
    }
  }
}
