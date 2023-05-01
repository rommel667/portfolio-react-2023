import { FC, useContext } from 'react'
import { ThemeContext } from '../theme/Theme'
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";

interface ModeProps {

}

const Mode: FC<ModeProps> = ({ }) => {

    const [mode, toggleMode] = useContext(ThemeContext)

    const onSetDarkMode = () => {
        toggleMode()
        if (mode) {
            localStorage.removeItem("mode")
        } else {
            localStorage.setItem("mode", "dark")
        }
    }

    return (
        <div className="text-gray-300 cursor-pointer">
            {mode === 'dark' ?
                <BsFillBrightnessHighFill
                    className="w-6 h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={onSetDarkMode}
                /> :
                <BsMoon
                    className="text-gray-700 w-6 h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={onSetDarkMode}
                />}
        </div>
    )

}

export default Mode