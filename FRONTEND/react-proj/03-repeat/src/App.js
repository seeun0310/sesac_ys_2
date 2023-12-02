import './App.css';
import { ListMap } from './components/ListMap';
import { SignUp, GuestBook } from './components/ListMapPrac';
import FuncRef from './components/FuncRef';
import ClassRef from './components/ClassRef';
import ScrollBox from './components/ScrollBox';
import RefPrac from './components/RefPrac';

function App() {
  return (
    <>
      <ListMap />
      <SignUp />
      <GuestBook />
      <FuncRef />
      <ClassRef />
      <ScrollBox />
      <RefPrac />
    </>
  );
}

export default App;
