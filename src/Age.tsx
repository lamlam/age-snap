import { formatDistanceStrict } from 'date-fns';

export function Age(props: { birthDate: Date }) {
  const now = new Date();
  // Calculate age in year unit and return string in "1 year" format
  const yearFormatString: string = formatDistanceStrict(now, props.birthDate, {
    unit: 'year',
    roundingMethod: 'floor',
  });
  const age = Number(yearFormatString.split(' ')[0]);
  if (isNaN(age)) {
    return <div>Invalid Date</div>;
  }

  // Calculate age in month unit and return string in "1 month" format
  const monthFormatString: string = formatDistanceStrict(now, props.birthDate, {
    unit: 'month',
    roundingMethod: 'floor',
  });
  let ageInMonth = Number(monthFormatString.split(' ')[0]);
  if (isNaN(ageInMonth)) {
    return <div>Invalid Date</div>;
  }
  if (now.getDate() < props.birthDate.getDate()) {
    ageInMonth -= 1;
  }

  // Calculate age in day unit and return string in "1 day" format
  const dayFormatString: string = formatDistanceStrict(now, props.birthDate, {
    unit: 'day',
    roundingMethod: 'floor',
  });
  const ageInDay = Number(dayFormatString.split(' ')[0]);
  if (isNaN(ageInDay)) {
    return <div>Invalid Date</div>;
  }

  return (
    <ul>
      <li>{age}歳</li>
      <li>{ageInMonth}ヶ月</li>
      <li>{Math.trunc(ageInDay / 7)}週</li>
      <li>{ageInDay}日</li>
    </ul>
  );
}
