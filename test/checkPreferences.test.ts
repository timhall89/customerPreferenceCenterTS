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

    const result = checkPreferences(new Date(2020, 0, 1), 7, preferences);

    const expectedResult = new Map<number, string[]>([
      [new Date(2020, 0, 1).getTime(), ['Tim', 'Abi', 'Dan', 'Tony']],
      [new Date(2020, 0, 2).getTime(), ['Tim']],
      [new Date(2020, 0, 3).getTime(), ['Tim', 'Tony']],
      [new Date(2020, 0, 4).getTime(), ['Tim']],
      [new Date(2020, 0, 5).getTime(), ['Tim']],
      [new Date(2020, 0, 6).getTime(), ['Tim', 'Dan', 'Tony']],
      [new Date(2020, 0, 7).getTime(), ['Tim', 'Dan']],
    ]);

    result.forEach((customers, date) => {
      const expectedCustomers = expectedResult.get(date.getTime()) || [];
      expect(customers).to.eql(expectedCustomers);
    });
  });
});
