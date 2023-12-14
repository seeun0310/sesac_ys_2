import ReactDOM from 'react-dom/client';
import App from './App';

// 타입 단언 (as)
// ts 컴파일러가 null, undefined가 가능하다라고 해석하고 있고,
// 나는 #root가 존재한다고 단언할 수 있는 상황 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
