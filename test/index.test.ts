import {expect, test} from 'bun:test';
import {alwaysReturnTrue} from '../src';

test('alwaysReturnTrue', () => {
  expect(alwaysReturnTrue()).toBe(true);
});
