import { createContext, useEffect, useState, FC } from "react"

export const ThemeContext = createContext<any>(null)

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

    const [mode, setMode] = useState<string>('light')

    useEffect(() => {
        if (localStorage.getItem("mode")) {
            setMode("dark")
        }
    }, [])

    const toggleMode = () => {
        setMode(mode === "dark" ? "light" : "dark")
    }

    const data = [mode, toggleMode]

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider