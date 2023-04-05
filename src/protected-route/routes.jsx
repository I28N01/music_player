import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import SelectPlaylist from '../pages/Playlists/Playlists'
import UserPlaylist from '../pages/UserPlaylist/UserPlaylist'
import NotFound from '../pages/NotFound/NotFound'
import ProtectedRoute from './index'
import Navigation from '../components/Navigation/Navigation'
import Player from '../components/Player/Player/Player'
import Tracks from '../pages/Tracks/Tracks'

export default function Routes() {
  const isLogin = useSelector((state) => state.auth.isLogin)

  return (
    <ReactRoutes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Navigation />}>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/" element={<ProtectedRoute isLogin={isLogin} />}>
        <Route element={<Navigation />}>
          <Route element={<Player />}>
            <Route index element={<Tracks />} />
            <Route path="tracks" element={<Tracks />} />
            <Route path="playlist/:id" element={<SelectPlaylist />} />
            <Route path="my_playlist" element={<UserPlaylist />} />
          </Route>
        </Route>
      </Route>
    </ReactRoutes>
  )
}
