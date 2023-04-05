import { useDispatch } from 'react-redux'
import { search } from '../../store/slices/searchSlice'
import searchImg from '../../img/icon/search.png'
import { useThemeContext } from '../../context/theme'
import component from './Search.module.scss'

export default function Search() {
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    dispatch(search(e.target.value))
  }
  const { theme } = useThemeContext()

  return (
    <div
      className={component.search}
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <img className={component.image} src={searchImg} alt="search" />
      <input
        className={component.input}
        onChange={onChangeHandler}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
