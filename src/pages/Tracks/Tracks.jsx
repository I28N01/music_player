import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter/Filter'
import Playlist from '../../components/Playlist/Playlist/Playlist'
import PlaylistTitle from '../../components/Playlist/PlaylistTitle/PlaylistTitle'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../context/theme'
import page from './Tracks.module.scss'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
import playlist1 from '../../img/playlist01.png'
import playlist2 from '../../img/playlist02.png'
import playlist3 from '../../img/playlist03.png'
import { useGetPlaylistsQuery } from '../../api/api'

export default function Tracks() {
  const { theme } = useThemeContext()
  const playlistArr = [playlist1, playlist2, playlist3]
  const { data, isSuccess, isLoading } = useGetPlaylistsQuery('')

  return (
    <>
      <div
        className={page.section}
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <div className={page.wrap}>
          <Search />
          <div
            className={page.title}
            style={{ backgroundColor: theme.background, color: theme.color }}
          >
            Треки
          </div>
          <Filter />
          <PlaylistTitle />
          <Playlist />
        </div>
      </div>
      <div
        className={page.sidebar}
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <div className={page.sidebar}>
          <div className={page.SidebarList}>
            {isSuccess &&
              data.map(({ id }) => (
                <Link to={`/playlist/${id}`} key={id}>
                  <SidebarItem
                    id={id}
                    src={playlistArr[id - 1]}
                    isLoading={isLoading}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
