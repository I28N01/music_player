import { useSelector } from 'react-redux'
import note from '../../../img/icon/note.svg'
import FavoriteButtons from '../../UI/FavoriteButtons/FavoriteButtons'
import { useGetTrackByIdQuery } from '../../../api/api'
import { Skeleton } from '../../UI/Skeletons/styles'
import * as S from './styles'
import { useThemeContext } from '../../../context/theme'

export default function Track() {
  const trackId = useSelector((state) => state.player.id)
  const { data, isLoading, isSuccess } = useGetTrackByIdQuery(trackId)
  const { theme } = useThemeContext()

  return (
    <S.TrackWrapper>
      <S.TrackContainer>
        <S.PlayImageWrapper background={theme.backgroundNote}>
          <S.PlayIconImage src={note} alt="music" />
        </S.PlayImageWrapper>
        {isSuccess && (
          <>
            <S.TrackName>
              <S.TrackPlayLink href={data.track_file}>
                {data.name}
              </S.TrackPlayLink>
            </S.TrackName>
            <S.TrackAuthor>
              <S.TrackAuthorLink href={data.track_file}>
                {data.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
          </>
        )}
        {isLoading && (
          <>
            <S.TrackName>
              <Skeleton />
            </S.TrackName>
            <S.TrackAuthor>
              <Skeleton />
            </S.TrackAuthor>
          </>
        )}
      </S.TrackContainer>
      <FavoriteButtons />
    </S.TrackWrapper>
  )
}
