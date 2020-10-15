import { expect } from 'chai';
import checkPreferences from '../src/checkPreferences';
import everyDayPreferenceCheck from '../src/preferences/everyDayPreferenceCheck';
import neverPreferenceCheck from '../src/preferences/neverPreferenceCheck';
import dayOfMonthPreferenceCheck from '../src/preferences/dayOfMonthPreferenceCheck';
import daysOfWeekPreferenceCheck from '../src/preferences/daysOfWeekPreferenceCheck';

describe('checkPreferences', () => {
  it('calculate the customer to send to on a range of dates', () => {
    const preferences = new Map([
      ['Tim', everyDayPreferenceCheck()],
      ['Abi', dayOfMonthPreferenceCheck(1)],
      ['Dan', daysOfWeekPreferenceCheck([1, 2, 3])],
      ['Tony', daysOfWeekPreferenceCheck([1, 3, 5])],
    ]);

    const result = checkPreferences(new Date(2020, 0, 1), 30, preferences);
    console.log(result);
    expect(result).to.equal(5);
  });
});
