import React, { useState } from "react";
import { render } from "@testing-library/react";
import {
  ThemeContext,
  themes,
} from "../context/theme";
import PropTypes from 'prop-types';

const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

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

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

  AllProviders.propTypes = {
    children: PropTypes.element
    };