import { useParams } from 'react-router-dom'
import Search from '../../components/Search/Search'
import SelectPlaylistContent from '../../components/Playlist/SelectPlaylistContent/SelectPlaylistContent'
import PlaylistTitle from '../../components/Playlist/PlaylistTitle/PlaylistTitle'
import page from './Playlists.module.scss'

export default function SelectPlaylist() {
  const playlistArr = ['Плейлист дня', '100 танцевальных хитов', 'Инди заряд']

  const params = useParams()
  const playlistId = params.id

  return (
    <div>
      <div className={page.section}>
        <div className={page.wrap}>
          <Search />
          <div className={page.title}>{playlistArr[playlistId - 1]}</div>
          <PlaylistTitle />
          <SelectPlaylistContent playlistId={playlistId} />
        </div>
      </div>
    </div>
  )
}
