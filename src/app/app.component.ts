import { Component } from '@angular/core';
import { Automato } from './automato';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue: string;
  accept: boolean;
  autonomo: Automato;
  sequence: string[];

  private evenOddAutonomous(autonomo: Automato, sequence: string[]) {
    if (this.isEqual(autonomo, sequence)) {
      return (this.accept = true);
    }
    return (this.accept = false);
  }

  private isEqual(autonomo: Automato, sequence: string[]): boolean {
    return sequence[0].slice(-1).toString() === autonomo.finalState.toString();
  }

  // TODO regex para aceitar apenas 0 e 1.
  onChange(alfabeto) {
    this.inputValue = alfabeto;
    this.sequence = [alfabeto.split('')];
    const unrepeated = (str) => [...new Set(str)].join('');

    // No caso deste autonomo, o estado e o alfabeto serão o mesmo.
    this.autonomo = {
      states: unrepeated(alfabeto).split(''),
      alphabet: unrepeated(alfabeto).split(''),
      initialState: alfabeto[0],
      finalState: 0,
    };

    this.evenOddAutonomous(this.autonomo, this.sequence);
  }
}
