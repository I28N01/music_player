import PropTypes from 'prop-types';
import * as S from './styles'
import { useThemeContext } from '../../../context/theme'


export default function Categories({ text, isActive, count }) {
    const { theme } = useThemeContext();

    return (
        <S.FilterButton border={theme.border} isActive={isActive}>
            <p>{text}</p>
            <S.FilterButtonCount isActive={isActive}>
                {count}
            </S.FilterButtonCount>
        </S.FilterButton>
    )
}

Categories.propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
    count: PropTypes.string
    };