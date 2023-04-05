import {useState} from "react";
import { ThemeContext, themes } from "./theme";
import PropTypes from 'prop-types';


export const  ChangeThemeTrack= ({children}) => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

 const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

    return (
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>        
          {children}
      </ThemeContext.Provider>

    );
  };
  ChangeThemeTrack.propTypes = {
    children: PropTypes.element,
    };