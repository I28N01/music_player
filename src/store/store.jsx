import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api'
import authReducer from './slices/authSlice'
import filterReducer from './slices/filterSlice'
import searchReducer from './slices/searchSlice'
import playerReducer from './slices/playerSlice'
import playlistsReducer from './slices/playlistSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  filter: filterReducer,
  player: playerReducer,
  playlists: playlistsReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export default store
