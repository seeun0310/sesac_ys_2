
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increase, decrease } from './store/conterReducer';
import { Box1Container, ReduxPracContainer } from './containers/BoxesContainer';
import { ReduxPrac } from './components/Boxes';

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서

// components 폴더
// 보통 presentational 컴포넌트만 저장
// redux store에 직접적으로 접근하지 않는 컴포넌트만 모아둠

function AppRedux3() {
    return (
    <div>
    <Box1Container />
    <ReduxPracContainer />
    </div>
  );
}


export default AppRedux3;
