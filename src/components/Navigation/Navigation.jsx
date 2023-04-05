import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogout } from '../../store/slices/authSlice'
import * as S from './styles'
import logo from '../../img/logo.png'
import logoBlack from '../../img/LogoBlack.png'
import { useThemeContext } from '../../context/theme'
import dark from '../../img/icon/dark.svg'
import light from '../../img/icon/light.svg'
import { Outlet } from 'react-router-dom'

export default function Navigation() {
  const [menuShown, setMenuShown] = useState(false)

  const burgerClickHandler = () => setMenuShown(!menuShown)

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(setLogout())
    document.cookie = 'token=; max-age=-1'
    document.cookie = 'username=; max-age=-1'
  }
  const { toggleTheme } = useThemeContext()
  const { theme } = useThemeContext()
  const [changeTheme, setChangeTheme] = useState(false)
  const toggleThemes = () => {
    if (changeTheme) {
      setChangeTheme(false)
    } else {
      setChangeTheme(true)
    }
  }
  console.log(theme)
  return (
    <S.LayoutWrapper>
      <S.LayoutContainer
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <S.Main>
          <S.Navigation
            data-testid="another-element"
            style={{
              backgroundColor: theme.backgroundHeader,
              color: theme.color,
            }}
          >
            <NavLink to="/tracks">
              {theme.colorA ? (
                <S.LogoNav src={logoBlack} alt="logo" />
              ) : (
                <S.LogoNav src={logo} alt="logo" />
              )}
            </NavLink>
            <S.Burger onClick={burgerClickHandler}>
              {menuShown ? (
                <>
                  <S.BurgerClose />
                  <S.BurgerClose />
                  <S.BurgerClose />
                </>
              ) : (
                <>
                  <S.BurgerLine />
                  <S.BurgerLine />
                  <S.BurgerLine />
                </>
              )}
            </S.Burger>
            <S.Menu style={{ display: menuShown ? 'block' : 'none' }}>
              <S.MenuList>
                <NavLink to="/tracks">
                  <S.MenuItem
                    style={{
                      backgroundColor: theme.backgroundHeader,
                      color: theme.color,
                    }}
                  >
                    Главная
                  </S.MenuItem>
                </NavLink>
                <NavLink to="/my_playlist">
                  <S.MenuItem
                    style={{
                      backgroundColor: theme.backgroundHeader,
                      color: theme.color,
                    }}
                  >
                    Мой плейлист
                  </S.MenuItem>
                </NavLink>
                <NavLink to="/login" onClick={onLogout}>
                  <S.MenuItem
                    style={{
                      backgroundColor: theme.backgroundHeader,
                      color: theme.color,
                    }}
                  >
                    Выйти
                  </S.MenuItem>
                </NavLink>
                {!changeTheme ? (
                  <S.MenuItems>
                    <S.ThemeDiv
                      data-testid="custom-element"
                      onClick={toggleTheme}
                    >
                      <S.ThemeSvg
                        src={dark}
                        alt="dark"
                        onClick={toggleThemes}
                      />
                    </S.ThemeDiv>
                  </S.MenuItems>
                ) : (
                  <S.MenuItems>
                    <S.ThemeDiv onClick={toggleTheme}>
                      <S.ThemeSvg
                        src={light}
                        alt="light"
                        onClick={toggleThemes}
                      />
                    </S.ThemeDiv>
                  </S.MenuItems>
                )}
              </S.MenuList>
            </S.Menu>
          </S.Navigation>
          <Outlet />
        </S.Main>
      </S.LayoutContainer>
    </S.LayoutWrapper>
  )
}
