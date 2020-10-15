import CheckPreferenceOnDate from './CheckPreferenceOnDate';

interface DayOfMonthPreferenceCheck {
  (dayOfMonth: number): CheckPreferenceOnDate
}

const dayOfMonthPreferenceCheck: DayOfMonthPreferenceCheck = (dayOfMonth: number) => (date: Date) => date.getDate() === dayOfMonth;

export default dayOfMonthPreferenceCheck;
