import React, { createContext, useState } from "react"

export const ThemeContext = createContext('themecontext');

const ThemeProvider = ({ children }) => {
    const [themes, setThemes] = useState("light")

    const toggleTheme = () => {
        setThemes((theme) => theme === "light" ? "dark" : "light")
    }

    let contextValue = {
        themes, toggleTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider