import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { useGetFavoriteTracksQuery } from '../../../api/api'
import { clearTracksId, getTracksId } from '../../../store/slices/playerSlice'
import formatDuration from '../../../utils/formatDuration'
import TrackSkeletons from '../../UI/Skeletons/TrackSkeletons'
import * as S from './styles'

export default function UserPlaylistContent() {
  const dispatch = useDispatch()

  const { data, isLoading, isSuccess } = useGetFavoriteTracksQuery('')

  useEffect(() => {
    dispatch(clearTracksId())

    if (isSuccess) {
      data?.map((track) => dispatch(getTracksId(track.id)))
    }
  }, [data])

  if (isLoading) {
    return <TrackSkeletons />
  }

  if (isSuccess) {
    return (
      <S.PlaylistContent>
        {data?.map(
          ({ id, name, author, album, track_file, duration_in_seconds }) => (
            <PlaylistItem
              key={id}
              id={id}
              trackTitleLink={track_file}
              trackTitleText={name}
              trackAuthorText={author}
              trackAlbumText={album}
              trackTime={formatDuration(duration_in_seconds)}
              isFavorite
            />
          )
        )}
      </S.PlaylistContent>
    )
  }
  return <S.PlaylistContent />
}
