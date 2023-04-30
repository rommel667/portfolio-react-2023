import { createContext, useEffect, useState, FC } from "react"

export const ThemeContext = createContext<any>(null)

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("mode")) {
            setDarkMode(true)
        }
    }, [])

    const toggleMode = () => {
        setDarkMode(!darkMode)
    }

    const data = [darkMode, toggleMode]

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider