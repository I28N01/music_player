import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogout } from '../../store/slices/authSlice'
import logo from '../../img/logo.png'
import logoBlack from '../../img/LogoBlack.png'
import { useThemeContext } from '../../context/theme'
import dark from '../../img/icon/dark.svg'
import light from '../../img/icon/light.svg'
import { Outlet } from 'react-router-dom'
import page from './Navigation.module.scss'
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
    <div className={page.section}>
      <div
        className={page.container}
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <div className={page.wrap}>
          <div
            className={page.navigation}
            style={{
              backgroundColor: theme.backgroundHeader,
              color: theme.color,
            }}
          >
            <NavLink to="/tracks">
              {theme.colorA ? (
                <div className={page.logoNav} src={logoBlack} alt="logo" />
              ) : (
                <div className={page.logoNav} src={logo} alt="logo" />
              )}
            </NavLink>
            <div className={page.burger} onClick={burgerClickHandler}>
              {menuShown ? (
                <>
                  <div className={page.burgerClose} />
                  <div className={page.burgerClose} />
                  <div className={page.burgerClose} />
                </>
              ) : (
                <>
                  <div className={page.burgerLine} />
                  <div className={page.burgerLine} />
                  <div className={page.burgerLine} />
                </>
              )}
            </div>
            <div
              className={page.menu}
              style={{ display: menuShown ? 'block' : 'none' }}
            >
              <ul className={page.menuList}>
                <NavLink to="/tracks">
                  <li
                    className={page.menuItem}
                    style={{
                      backgroundColor: theme.backgroundHeader,
                      color: theme.color,
                    }}
                  >
                    Главная
                  </li>
                </NavLink>
                <NavLink to="/my_playlist">
                  <li
                    className={page.menuItem}
                    style={{
                      backgroundColor: theme.backgroundHeader,
                      color: theme.color,
                    }}
                  >
                    Мой плейлист
                  </li>
                </NavLink>
                <NavLink to="/login" onClick={onLogout}>
                  <li
                    className={page.menuItem}
                    style={{
                      backgroundColor: theme.backgroundHeader,
                      color: theme.color,
                    }}
                  >
                    Выйти
                  </li>
                </NavLink>
                {!changeTheme ? (
                  <div className={page.menuItems}>
                    <div className={page.theme} onClick={toggleTheme}>
                      <img
                        className={page.themeSvg}
                        src={dark}
                        alt="dark"
                        onClick={toggleThemes}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={page.menuItems}>
                    <div className={page.theme} onClick={toggleTheme}>
                      <img
                        className={page.themeSvg}
                        src={light}
                        alt="light"
                        onClick={toggleThemes}
                      />
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
