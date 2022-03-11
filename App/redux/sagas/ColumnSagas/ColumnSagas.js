import {call, takeEvery, put} from '@redux-saga/core/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../helpers/const';

function* getColumns(action) {
  const config = {
    headers: {Authorization: `Bearer ${action.payload}`},
  };
  const {data} = yield call(axios.get, `${API}/columns`, config);
  yield put({type: 'GET_COLUMNS_SUCCESS', payload: data});
}

function* addDesk(action) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  const {data} = yield call(
    axios.post,
    `${API}/columns`,
    action.payload.newDesk,
    config,
  );
  yield call(action.payload.goBack);
  yield put({type: 'ADD_DESK_SUCCESS', payload: data});
}

function* deleteDesk({payload: id}) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  yield call(axios.delete, `${API}/columns/${id}`, config);
  yield put({type: 'DELETE_DESK_SUCCESS', payload: id});
}

function* addPrayer(action) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  const {data} = yield call(
    axios.post,
    `${API}/prayers`,
    action.payload,
    config,
  );
  yield put({type: 'ADD_PRAYER_SUCCESS', payload: data});
}

function* getPrayersByDeskId(action) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  const {data} = yield call(axios.get, `${API}/prayers`, config);
  const filteredData = data.filter(
    prayer => prayer.columnId === action.payload,
  );
  const answeredPrayers = filteredData.filter(prayer => prayer.checked);
  const notAnsweredPrayers = filteredData.filter(prayer => !prayer.checked);
  yield put({
    type: 'GET_PRAYERS_SUCCESS',
    payload: {answeredPrayers, notAnsweredPrayers},
  });
}

function* updatePrayerById({payload: prayer}) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  yield call(
    axios.put,
    `${API}/prayers/${prayer.id}`,
    {...prayer, checked: !prayer.checked},
    config,
  );
  yield put({
    type: prayer.checked ? 'PRAYER_IS_NOT_ANSWERED' : 'PRAYER_IS_ANSWERED',
    payload: {...prayer, checked: !prayer.checked},
  });
}

function* getPrayerComments({payload}) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  let {data} = yield call(axios.get, `${API}/comments`, config);
  data = data.filter(comment => comment.prayerId === payload.prayerId);
  yield put({
    type: 'GET_PRAYER_COMMENTS_SUCCESS',
    payload: data,
  });
}

function* addComment({payload: comment}) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  let {data} = yield call(
    axios.post,
    `${API}/prayers/${comment.prayerId}/comments`,
    comment,
    config,
  );
  yield put({
    type: 'ADD_COMMENT_SUCCESS',
    payload: data,
  });
}

function* deletePrayer({payload: prayerId}) {
  const {token} = JSON.parse(yield AsyncStorage.getItem('userInfo'));
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  yield call(axios.delete, `${API}/prayers/${prayerId}`, config);
  yield put({
    type: 'DELETE_PRAYER_SUCCESS',
    payload: prayerId,
  });
}

export function* getColumnsSaga() {
  yield takeEvery('GET_COLUMNS', getColumns);
}

export function* addDeskSaga() {
  yield takeEvery('ADD_DESK', addDesk);
}

export function* deleteDeskSaga() {
  yield takeEvery('DELETE_DESK', deleteDesk);
}

export function* addPrayerSaga() {
  yield takeEvery('ADD_PRAYER', addPrayer);
}

export function* getPrayersSaga() {
  yield takeEvery('GET_PRAYERS', getPrayersByDeskId);
}

export function* updatePrayerSaga() {
  yield takeEvery('UPDATE_PRAYER', updatePrayerById);
}

export function* addCommentSaga() {
  yield takeEvery('ADD_COMMENT', addComment);
}

export function* getPrayerCommentsSaga() {
  yield takeEvery('GET_PRAYER_COMMENTS', getPrayerComments);
}

export function* deletePrayerSaga() {
  yield takeEvery('DELETE_PRAYER', deletePrayer);
}
