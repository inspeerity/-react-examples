import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  data: null
})

export const { Types, Creators } = createActions({
  action: null
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ACTION]: state => state
})
