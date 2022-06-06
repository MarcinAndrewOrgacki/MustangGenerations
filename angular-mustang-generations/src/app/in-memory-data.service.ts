import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mustang } from './mustang';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mustangs = [
      { id: 12, name: 'First Generation (1964-1973)' },
      { id: 13, name: 'Second Generation (1974-1978)' },
      { id: 14, name: 'Third Generation (1979-1993)' },
      { id: 15, name: 'Fourth Generation (1994-2004)' },
      { id: 16, name: 'Fifth Generation (2005-2014)' },
      { id: 17, name: 'Sixth Generation (2015-Present)' },
      // { id: 18, name: 'Fox Body 1979 - 1993' },
      // { id: 19, name: 'Magma' },
      // { id: 20, name: 'Tornado' }
    ];
    return {mustangs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(mustangs: Mustang[]): number {
    return mustangs.length > 0 ? Math.max(...mustangs.map(mustang => mustang.id)) + 1 : 11;
  }
}
