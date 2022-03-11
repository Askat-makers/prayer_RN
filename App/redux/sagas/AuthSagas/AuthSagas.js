import {call, takeEvery, put} from '@redux-saga/core/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../helpers/const';

function* signIn(action) {
  const {data} = yield call(axios.post, `${API}/auth/sign-in`, action.payload);
  if (data.message) {
    yield put({type: 'SIGN_IN_ERROR', payload: data.message});
    return;
  }
  AsyncStorage.setItem('userInfo', JSON.stringify(data));
  yield put({type: 'SIGN_IN_SUCCESS', payload: data});
}
function* isSignedIn() {
  const userInfo = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  yield put({type: 'SIGN_IN_SUCCESS', payload: userInfo});
}

export function* SignInSaga() {
  yield takeEvery('SIGN_IN', signIn);
}
export function* IsSignedInSaga() {
  yield takeEvery('IS_SIGNED_IN', isSignedIn);
}
