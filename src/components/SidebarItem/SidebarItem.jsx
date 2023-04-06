import { useDispatch } from 'react-redux'
import { getPlaylistId } from '../../store/slices/playlistSlice'
import PropTypes from 'prop-types'
import page from './SidebarItem.module.scss'

export default function SidebarItem({ src, isLoading, id }) {
  const dispatch = useDispatch()

  const onPlaylistId = (e) => {
    dispatch(getPlaylistId(e.target.id))
  }

  return (
    <div>
      <div className={page.sidebar}>
        {isLoading && <div className={page.skeleton} />}
        {!isLoading && (
          <img
            className={page.image}
            src={src}
            id={id}
            onClick={(e) => onPlaylistId(e)}
          />
        )}
      </div>
    </div>
  )
}

SidebarItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  isLoading: PropTypes.bool,
}
