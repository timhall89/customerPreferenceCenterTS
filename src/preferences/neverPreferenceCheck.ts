import CheckPreferenceOnDate from './CheckPreferenceOnDate';

const neverPreferenceCheck: () => CheckPreferenceOnDate = () => () => false;
export default neverPreferenceCheck;
