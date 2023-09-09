import './App.css';
import { Age } from './Age';
import { zonedTimeToUtc } from 'date-fns-tz';

function Person(props: { name: string; birthDate: Date }) {
  return (
    <>
      <h2>{props.name}</h2>
      <Age birthDate={props.birthDate} />
    </>
  );
}

function App() {
  return (
    <>
      <Person
        name="長男"
        birthDate={zonedTimeToUtc('2021-08-10 00:00:00.000', 'Asia/Tokyo')}
      />
    </>
  );
}

export default App;
