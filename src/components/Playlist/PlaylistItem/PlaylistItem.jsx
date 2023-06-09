import { useDispatch } from 'react-redux'
import { getTrackId, play } from '../../../store/slices/playerSlice'
import { ReactComponent as LikeIcon } from '../../../img/icon/like.svg'
import note from '../../../img/icon/note.svg'
import * as S from './styles'
import PropTypes from 'prop-types';
import { useThemeContext } from '../../../context/theme'


export default function PlaylistItem({
    id,
    trackTitleLink,
    trackTitleText,
    trackAuthorText,
    trackAlbumText,
    trackTime,
    isFavorite,
}) {
    const dispatch = useDispatch()

    const playTrackHandler = (e) => {
        e.preventDefault()

        dispatch(getTrackId(+e.target.id))
        dispatch(play(true))
    }
    const { theme } = useThemeContext();

    return (
        <S.PlaylistItem>
            <S.Track onClick={(e) => playTrackHandler(e)}>
                <S.TrackTitle onClick={(e) => playTrackHandler(e)}>
                    <S.TrackImageWrapper>
                        <S.TrackIconWrapper background={theme.backgroundNote}>
                            <S.TrackIconImage src={note} alt="music" />
                        </S.TrackIconWrapper>
                    </S.TrackImageWrapper>
                    <S.TrackTitleText id={id}>
                        <S.TrackTitleLink 
                            style={{ backgroundColor: theme.background, color: theme.color }}
                            id={id}
                            onClick={(e) => playTrackHandler(e)}
                            href={trackTitleLink}
                        >
                            {trackTitleText}
                            <S.TrackTitleSpan />
                        </S.TrackTitleLink>
                    </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor style={{ backgroundColor: theme.background, color: theme.color }}>{trackAuthorText}</S.TrackAuthor>
                <S.TrackAlbum>{trackAlbumText}</S.TrackAlbum>
                <S.TrackTime>
                    <S.TrackTimeWrapper>
                        <S.TrackLikeIconWrapper isFavorite={isFavorite}>
                            <LikeIcon aria-label="like" />
                        </S.TrackLikeIconWrapper>
                        <S.TrackTimeText>{trackTime}</S.TrackTimeText>
                    </S.TrackTimeWrapper>
                </S.TrackTime>
            </S.Track>
        </S.PlaylistItem>
    )
}
PlaylistItem.propTypes = {
    id: PropTypes.number,
    trackTitleLink: PropTypes.string,
    trackAuthorText: PropTypes.string,
    trackTitleText: PropTypes.string,
    trackAlbumText: PropTypes.string,
    trackTime: PropTypes.string,
    isFavorite: PropTypes.bool,

    };