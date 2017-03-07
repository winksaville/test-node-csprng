import { Expect, Test } from 'alsatian';
import rand = require('csprng');

export class CsprngTests {
  @Test('test csprng generates sequences that are all different')
  public test() {
    const cnt = 100;
    let seq: string[] = [];
    for (let i=0; i < cnt; i++) {
      seq.push(rand(32, 16));
    }
    Expect(seq.length).toBe(cnt);
    for (let i=0; i < seq.length; i++) {
      Expect(seq[i]).not.toBeNull();
      for (let j=0; j < seq.length; j++) {
        if (j == i) {
          Expect(seq[i]).toBe(seq[j]);
        } else {
          Expect(seq[i]).not.toBe(seq[j]);
        }
      }
    }
  }
}
