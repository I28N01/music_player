import { useDispatch } from 'react-redux'
import { filterByYear } from '../../../store/slices/filterSlice'
import * as S from './styles'
import { useThemeContext } from '../../../context/theme'


export default function FilterItemYears() {
    const dispatch = useDispatch()

    const onYearFilter = (e) => {
        dispatch(filterByYear(e.target.value))
    }
    const { theme } = useThemeContext();

    return (
        <S.FilterItemsYearWrapper style={{ backgroundColor: theme.backgroundNote, color: theme.color }}>
            <S.FilterItemsYearLabel htmlFor="year-filter">
                <input
                    id="year-filter-new"
                    name="year-filter"
                    type="radio"
                    value="newest"
                    onClick={onYearFilter}
                />
                <S.FilterYearLabel style={{ backgroundColor: theme.backgroundNote, color: theme.color }} htmlFor="year-filter-new">
                    Более новые
                </S.FilterYearLabel>
                <input
                    id="year-filter-old"
                    name="year-filter"
                    type="radio"
                    value="oldest"
                    onClick={onYearFilter}
                />
                <S.FilterYearLabel style={{ backgroundColor: theme.backgroundNote, color: theme.color }} htmlFor="year-filter-old">
                    Более старые
                </S.FilterYearLabel>
                <input
                    id="year-filter-default"
                    name="year-filter"
                    type="radio"
                    value="default"
                    onClick={onYearFilter}
                />
                <S.FilterYearLabel style={{ backgroundColor: theme.backgroundNote, color: theme.color }} htmlFor="year-filter-default">
                    Любые
                </S.FilterYearLabel>
            </S.FilterItemsYearLabel>
        </S.FilterItemsYearWrapper>
    )
}