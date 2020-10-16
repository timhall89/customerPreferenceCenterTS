import { expect } from 'chai';
import dayOfMonthPreferenceCheck from '../src/preferences/dayOfMonthPreferenceCheck';

describe('dayOfMonthPreferenceCheck', () => {
  it('it returns true for given day of month only', () => {
    const preferenceCheck = dayOfMonthPreferenceCheck(5);

    expect(preferenceCheck(new Date(2020, 8, 5))).to.equal(true);
    expect(preferenceCheck(new Date(2020, 9, 5))).to.equal(true);
    expect(preferenceCheck(new Date(2020, 10, 5))).to.equal(true);
    expect(preferenceCheck(new Date(2020, 9, 6))).to.equal(false);
    expect(preferenceCheck(new Date(2020, 9, 7))).to.equal(false);
  });
});
