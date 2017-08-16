import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {createStore, applyMiddleware} from 'redux'

const injectMiddleware = deps => ({ dispatch, getState }) => next => action
 => next(
     typeof action === 'function' ? action({ ...deps, dispatch, getState}) : action
    )

export default function configureStore(options, rootReducer) {
    const { initialState = {} } = options

    const middleware = [
        injectMiddleware({

        }),
        promiseMiddleware({
            promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
        }),
        reduxImmutableStateInvariant()
    ]

    return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}