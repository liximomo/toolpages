import moment from 'moment';

export function monday(offset = 0) {
  return moment().isoWeekday(1 + offset);
}

export function friday(offset = 0) {
  return moment().isoWeekday(5 + offset);
}
