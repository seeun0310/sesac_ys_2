
const initialValue = {money: 0};

const moneyReducer = (state=initialValue, action) => {
    switch(action.type) {
        case 'DEPOSIT':
            return {money: state.money+action.data};
        case 'WITHDRAWL':
            return {money: state.money-action.data};
        default:
            return state;
    }
}

export default moneyReducer;