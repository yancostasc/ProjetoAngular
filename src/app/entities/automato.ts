export interface Automato {
  states?: string[] | number[];
  alphabet?: string[] | number[];
  initialState?: number;
  finalState?: number;
}
