import React from 'react'
import PlaylistTitleCSS from './PlaylistTitle.module.scss'
import icon from '../../../img/icon/watch.svg'

function PlaylistTitle() {
  return (
    <div className={PlaylistTitleCSS.content__title}>
      <div
        className={`${PlaylistTitleCSS.playlist_title__col} ${PlaylistTitleCSS.col01}`}
      >
        Трек
      </div>
      <div
        className={`${PlaylistTitleCSS.playlist_title__col} ${PlaylistTitleCSS.col02}`}
      >
        ИСПОЛНИТЕЛЬ
      </div>
      <div
        className={`${PlaylistTitleCSS.playlist_title__col} ${PlaylistTitleCSS.col03}`}
      >
        АЛЬБОМ
      </div>
      <div
        className={`${PlaylistTitleCSS.playlist_title__col} ${PlaylistTitleCSS.col04}`}
      >
        <div className={PlaylistTitleCSS.playlist_title__svg}>
          <img src={icon} alt="time" />
        </div>
      </div>
    </div>
  )
}

export default PlaylistTitle
