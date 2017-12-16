import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({


  actions: {
    calculate(puzzle) {
      let checksums = A(), rows = puzzle.split('\n');

      rows.map(row => {
        let min = 9999, max = 0, values = row.split(/\s+/);

        values.map(val => {
          let num = Number(val);
          if (num < min) {
            min = num;
          }
          if (num > max) {
            max = num;
          }
        });

        checksums.pushObject(max - min);
      });

      let sum = checksums.reduce((a, b) => a + b);
      this.set('result', sum);
    }
  }
});
