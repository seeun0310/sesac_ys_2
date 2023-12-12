const initialValue = {number: 100};

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 발생할 수 있는 action을 return 하는 함수
// action의 type의 이름이 바뀐다고 가정하면, action을 발생시키는 모든 곳에서(dispatch)
// action.type을 다 변경해줘야 함. 이를 해결하기 위해 action 미리 정의함
export const increase = () => ({type: INCREMENT});
export const decrease = () => ({type: DECREMENT});

const counterReducer = (state=initialValue, action) => {
  switch(action.type) {
    case 'INCREMENT': // INCREMENT 상수 선언 전 ver.3
    case INCREMENT: // INCREMENT 상수 선언 후 ver.3-1
      return {number: state.number+1};
    case 'DECREMENT':
    case DECREMENT:
      return {number: state.number-1};
    default: 
      return state;
  }
};

export default counterReducer;