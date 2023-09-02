import { formatDistanceStrict } from 'date-fns';

export function Age(props: { name: string; birthDate: Date }) {
  const now = new Date();
  const age = formatDistanceStrict(now, props.birthDate, {
    unit: 'year',
    roundingMethod: 'floor',
  }).split(' ')[0];

  return (
    <div>
      <h2>{props.name}</h2>
      <div>{age}歳</div>
    </div>
  );
}
