import { createContext, useEffect, useState, FC } from "react"

export const ThemeContext = createContext<any>(null)

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

    const [mode, setMode] = useState<string | null>('')

    useEffect(() => {
        if (localStorage.getItem("mode")) {
            setMode(localStorage.getItem("mode"))
        } else {
            setMode("")
        }
    }, [])

    const toggleMode = () => {
        setMode(mode === "dark" ? "" : "dark")
    }

    const data = [mode, toggleMode]

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider