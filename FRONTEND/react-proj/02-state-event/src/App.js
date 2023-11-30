
import './App.css';
import {StateFunc, StateFuncPrac} from './components/StateFunc';
import {StateClass, StateClassPrac} from './components/StateClass';
import {EventClass, EventClassPrac} from './components/EventClass';
import {EventFunc, EventFuncPrac} from './components/EventFunc';

function App() {
  return (
    <div>
      <StateClass name="seeun"/>
      <StateFunc></StateFunc>
      <StateClassPrac/>
      <StateFuncPrac />
      <EventClass />
      <EventFunc />
      <EventClassPrac />
      <EventFuncPrac />
    </div>
  );
}

export default App;