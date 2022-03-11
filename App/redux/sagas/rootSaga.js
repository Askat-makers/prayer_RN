import {spawn, call, all} from '@redux-saga/core/effects';
import {IsSignedInSaga, SignInSaga} from './AuthSagas';
import {
  addDeskSaga,
  addPrayerSaga,
  deleteDeskSaga,
  getColumnsSaga,
  getPrayersSaga,
  updatePrayerSaga,
  addCommentSaga,
  getPrayerCommentsSaga,
  deletePrayerSaga,
} from './ColumnSagas';

export function* rootSaga() {
  const sagas = [
    SignInSaga,
    IsSignedInSaga,
    getColumnsSaga,
    addDeskSaga,
    deleteDeskSaga,
    addPrayerSaga,
    getPrayersSaga,
    updatePrayerSaga,
    addCommentSaga,
    getPrayerCommentsSaga,
    deletePrayerSaga,
  ];

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          console.log(error);
        }
      }
    });
  });
  yield all(retrySagas);
}
