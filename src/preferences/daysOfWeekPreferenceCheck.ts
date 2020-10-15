import CheckPreferenceOnDate from './CheckPreferenceOnDate';

interface DaysOfWeekPreferenceCheck {
  (daysOfWeek: number[]): CheckPreferenceOnDate
}

const daysOfWeekPreferenceCheck: DaysOfWeekPreferenceCheck = (daysOfWeek: number[]) => (date: Date) => daysOfWeek.includes(date.getDay());

export default daysOfWeekPreferenceCheck;
