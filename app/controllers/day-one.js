import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  actions: {
    calculate(puzzle) {
      let array = A(String(puzzle).split('').map(d => Number(d)));
      let total = 0;

      array.forEach((_, index) => {
        if (index < array.get('length') - 1) {
          if (array[index] === array[index + 1]) {
            total += array[index];
          }
        } else {
          if (array[index] === array.get('firstObject')) {
            total += array[index];
          }
        }
      });

      this.set('result', total);
    }
  }
});
