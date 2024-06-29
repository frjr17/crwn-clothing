import { takeLatest, put, all, call } from 'redux-saga/effects';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '../../utils/firebase';
import { USER_ACTION_TYPES } from './types';
import { signInFailure, signInSuccess, signOutSuccess, signUpSuccess } from './actions';



export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        const data = userSnapshot.data();
        yield put(signInSuccess({ id: userSnapshot.id, ...data }))
    } catch (error) {
        console.log(error)
        yield put(signInFailure(error))
    }

}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {

    }
}

export function* signInWithGoogle() {
    try {
        yield call(signInWithGooglePopup)
        yield call(isUserAuthenticated)
    } catch (error) {

    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {

        const userAuth = yield call(signInAuthWithEmailAndPassword, email, password)
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth.user)
    } catch (error) {
        yield put(signInFailure(error))

    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const userAuth = yield call(createAuthUserWithEmailAndPassword, email, password)
        if (!userAuth) return;

        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth.user, { displayName })

        if (!userSnapshot.exists()) {
            yield put(signUpSuccess({ email, password, displayName }))
        }
    } catch (error) {
        console.log('saga error', { ...error })
        if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use')
        }
        yield put(signInFailure(error))
    }
}

export function* signOut() {
    try {
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInWithEmail)
}

export function* userSaga() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignUpStart), call(onSignOutStart), call(onSignUpSuccess)])
}