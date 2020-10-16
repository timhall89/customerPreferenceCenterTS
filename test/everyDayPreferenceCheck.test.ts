import { expect } from 'chai';
import everyDayPreferenceCheck from '../src/preferences/everyDayPreferenceCheck';

describe('everyDayPreferenceCheck', () => {
  it('it always returns true for any date', () => {
    const preferenceCheck = everyDayPreferenceCheck();
    const endDate = new Date(2020, 3, 1);
    for (const date = new Date(2020, 0, 1); date <= endDate; date.setDate(date.getDate() + 1)) {
      expect(preferenceCheck(date)).to.equal(true);
    }
  });
});
