import Search from '../../components/Search/Search'
import UserPlaylistContent from '../../components/Playlist/UserPlaylistContent/UserPlaylistContent'
import { useThemeContext } from '../../context/theme'
import PlaylistTitle from '../../components/Playlist/PlaylistTitle/PlaylistTitle'
import page from './UserPlaylist.module.scss'
export default function UserPlaylist() {
  const { theme } = useThemeContext()

  return (
    <div>
      <div
        className={page.block}
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <div className={page.section}>
          <Search />
          <h2 className={page.title}>Мой плейлист</h2>
          <PlaylistTitle />
          <UserPlaylistContent />
        </div>
      </div>
    </div>
  )
}
