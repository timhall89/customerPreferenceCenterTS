import CheckPreferenceOnDate from './preferences/CheckPreferenceOnDate';

export default (startDate: Date, numOfDays: number,
  customerPreferences: Map<string, CheckPreferenceOnDate>) => {
  const result = new Map<Date, string[]>();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + numOfDays - 1);
  for (const date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const customers: string[] = [];
    customerPreferences.forEach((checkPreferenceOnDate, customer) => {
      if (checkPreferenceOnDate(date)) customers.push(customer);
    });
    result.set(new Date(date), customers);
  }

  return result;
};
