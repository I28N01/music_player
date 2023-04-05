import { createContext, useContext } from 'react'

export const themes = {
  light: {
    color: '#000000',
    border: '1px solid #000000',
    background: '#fff',
    colorA: '#B1B1B1',
    placeholder: '#000000',
    backgroundNote: '#F6F4F4',
    backgroundHeader: '#F6F5F3',
    hoverButton: '#580EA2',
    borderFilter: '#F6F4F4',
  },
  dark: {
    color: '#fff',
    border: '1px solid #FFFFFF',
    background: '#181818',
    backgroundNote: '#313131',
    hoverButton: '#D9B6FF',
    borderFilter: '#313131',
  },
}

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark;

  return theme;
}