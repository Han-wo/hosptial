import { createAction, handleActions } from 'redux-actions';
import createRequestSaga,{
    createRequestActionTypes,
} from '../lib/CreateRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

// 액션 타입 정의

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
// createRequestSaga 에서는 반복되는 부분을 함수화해서 정리해주기 위해서 createRequestActionTypes 사용해서 한번에 적음.
// 글쓰기 관련
const [ WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST')

// 액션 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD,({ key, value })=>({
    key,
    value
}));

export const writePost = createAction(WRITE_POST, ({title,body, rate}) =>({
    title,
    body,
    rate,
}))

// saga 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);

export function* writeSaga(){
    yield takeLatest(WRITE_POST,writePostSaga);
}
// 초기 상태 정의
const initialState = {
    title:'',
    body:'',
    rate:[]
};


// 리듀서 함수

const write = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState 를 넣으면 초기 상태로 바뀜
        [CHANGE_FIELD] : (state,{payload: { key,value }}) =>({
            ...state,
            [key] : value, // 특정 key 값 업데이트
        }),
        [WRITE_POST]: state =>({
            ...state,
            // post, postError 초기화
            post:null,
            postError:null
        }),
        // post success
        [WRITE_POST_SUCCESS] : ( state, {payload : post}) =>({
            ...state,
            post
        }) ,
        //post fail
        [WRITE_POST_FAILURE] : (state, {payload:postError}) =>({
            ...state,
            postError
        }) ,
    },
    initialState
)


export default write;