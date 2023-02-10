import { combineReducers } from "redux";
// all import 
import { all } from 'redux-saga/effects';
import Write,{writeSaga} from "./write"
import loading from './loading';
import auth,{authSaga} from "./Auth"



const rootReducer = combineReducers({
    auth,
    loading,
    Write,
});

export function* rootSaga(){
    yield all([writeSaga()]);
}

export default rootReducer;