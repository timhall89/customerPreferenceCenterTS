import { expect } from 'chai';
import daysOfWeekPreferenceCheck from '../src/preferences/daysOfWeekPreferenceCheck';

describe('daysOfWeekPreferenceCheck', () => {
  it('it returns true for given weekdays', () => {
    const preferenceCheck = daysOfWeekPreferenceCheck([0, 2, 5]);

    expect(preferenceCheck(new Date(2020, 9, 18))).to.equal(true);
    expect(preferenceCheck(new Date(2020, 9, 19))).to.equal(false);
    expect(preferenceCheck(new Date(2020, 9, 20))).to.equal(true);
    expect(preferenceCheck(new Date(2020, 9, 21))).to.equal(false);
    expect(preferenceCheck(new Date(2020, 9, 22))).to.equal(false);
    expect(preferenceCheck(new Date(2020, 9, 23))).to.equal(true);
    expect(preferenceCheck(new Date(2020, 9, 24))).to.equal(false);
  });
});
