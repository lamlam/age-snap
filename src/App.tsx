import './App.css';
import { Age } from './Age';
import { zonedTimeToUtc } from 'date-fns-tz';

function App() {
  return (
    <>
      <Age
        name="長男"
        birthDate={zonedTimeToUtc('2021-08-10 00:00:00.000', 'Asia/Tokyo')}
      />
    </>
  );
}

export default App;
