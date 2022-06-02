export interface Automato {
  states?: string[] | number[];
  alphabet?: string[] | number[];
  initialState?: number | string;
  finalState?: number | string;
}
