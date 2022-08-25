import { configureStore, createSlice } from '@reduxjs/toolkit'
import { countries, packages } from '@api/mock'
const form = createSlice({
  name: 'form',
  initialState: {
    name: '',
    age: 0,
    country: countries?.[0]?.code,
    package: packages?.[0]?.key,
  },
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload
    },
    setAge: (state, { payload }) => {
      state.age = payload
    },
    setCountry: (state, { payload }) => {
      state.country = payload
    },
    setPackage: (state, { payload }) => {
      state.package = payload
    },
  },
})
const page = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    setPage: (_state, { payload }) => payload,
  },
})
export const store = configureStore({
  reducer: {
    form: form.reducer,
    page: page.reducer,
  },
})
export const {
  setName: actionName,
  setAge: actionAge,
  setCountry: actionCountry,
  setPackage: actionPackage,
} = form.actions
export const { setPage: actionPage } = page.actions

// =============== ACTION DISPATCHER ===============

// FORM
export const setName = (e) => store.dispatch(actionName(e))
export const setAge = (e) => store.dispatch(actionAge(e))
export const setCountry = (e) => store.dispatch(actionCountry(e))
export const setPackage = (e) => store.dispatch(actionPackage(e))
// PAGE
export const setPage = (e) => store.dispatch(actionPage(e))

// ============== END ACTION DISPATCHER ==============
