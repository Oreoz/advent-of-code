import { test } from 'qunit';
import moduleForAcceptance from 'advent-of-code/tests/helpers/module-for-acceptance';
import $ from 'jquery';

moduleForAcceptance('Acceptance | day one');

test('it calculates the result of `` correctly', async function(assert) {
  await visit('/day-one');

  await click('#day-one-calculate');

  assert.equal($('.day-one-result').text(), 0);
});

test('it calculates the result of `1122` correctly', async function(assert) {
  await visit('/day-one');

  await fillIn('#day-one-input', '1122');
  await click('#day-one-calculate');

  assert.equal($('.day-one-result').text(), 3);
});

test('it calculates the result of `1111` correctly', async function(assert) {
  await visit('/day-one');

  await fillIn('#day-one-input', '1111');
  await click('#day-one-calculate');

  assert.equal($('.day-one-result').text(), 4);
});

test('it calculates the result of `1234` correctly', async function(assert) {
  await visit('/day-one');

  await fillIn('#day-one-input', '1234');
  await click('#day-one-calculate');

  assert.equal($('.day-one-result').text(), 0);
});

test('it calculates the result of `91212129` correctly', async function(assert) {
  await visit('/day-one');

  await fillIn('#day-one-input', '91212129');
  await click('#day-one-calculate');

  assert.equal($('.day-one-result').text(), 9);
});
