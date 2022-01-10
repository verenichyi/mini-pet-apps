import {handleActions} from 'redux-actions';
import {
    setCardHolder,
    setCardType,
    setCardTypeImage,
    setCreditCardNum, setCVV,
    setExpireMonth,
    setExpireYear
} from "../actionCreators";

import visa from 'src/assets/card/visa.png';

interface State {
    [key: string]: string
}

const initialState = {
    creditCardNum: '1234 5678 9101 1112',
    cardType: '',
    cardTypeImage: visa,
    cardHolder: 'Jason Smith',
    expireMonth: 'MM',
    expireYear: 'YYYY',
    cvv: '123',
};

const cardReducer = handleActions({
    [setCreditCardNum]: (state: State, {payload}: { payload: string }) => ({...state, creditCardNum: payload}),
    [setCardType]: (state: State, {payload}: { payload: string }) => ({...state, cardType: payload}),
    [setCardTypeImage]: (state: State, {payload}: { payload: string }) => ({...state, cardTypeImage: payload}),
    [setCardHolder]: (state: State, {payload}: { payload: string }) => ({...state, cardHolder: payload}),
    [setExpireMonth]: (state: State, {payload}: { payload: string }) => ({...state, expireMonth: payload}),
    [setExpireYear]: (state: State, {payload}: { payload: string }) => ({...state, expireYear: payload}),
    [setCVV]: (state: State, {payload}: { payload: string }) => ({...state, cvv: payload}),
}, initialState);

export default cardReducer;