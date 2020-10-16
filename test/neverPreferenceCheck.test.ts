import { expect } from 'chai';
import neverPreferenceCheck from '../src/preferences/neverPreferenceCheck';

describe('neverPreferenceCheck', () => {
  it('it never returns true for any date', () => {
    const preferenceCheck = neverPreferenceCheck();
    const endDate = new Date(2020, 3, 1);
    for (const date = new Date(2020, 0, 1); date <= endDate; date.setDate(date.getDate() + 1)) {
      expect(preferenceCheck(date)).to.equal(false);
    }
  });
});
