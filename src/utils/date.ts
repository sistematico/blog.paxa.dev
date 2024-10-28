import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
// import advancedFormat from 'dayjs/plugin/advancedFormat'
import utc from 'dayjs/plugin/utc';

dayjs.locale('pt-br');
// dayjs.extend(advancedFormat)
dayjs.extend(utc);

export function formatDate(date: Date) {
  return dayjs(date).utc().format('YYYY-MM-DD');
}