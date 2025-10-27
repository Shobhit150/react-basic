import React, { createContext } from 'react'

export const ThemeContext = createContext({
    themeMode: "light",
    changeTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return React.useContext(ThemeContext)
}