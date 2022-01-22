import { useContext } from "react"
import { ThemeContext } from "styled-components"

const BackgroundWrap = (props) => {
    const { activeSection } = props
    const theme = useContext(ThemeContext)

    return (
        <div className="absolute top-0 h-full">
            <div className={`absolute top-0 h-full w-screen ${theme.backgroundWrap[0]} ${activeSection === 0 ? `animate-fadeIn-500` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-full w-screen ${theme.backgroundWrap[1]} ${activeSection === 1 ? `animate-fadeIn` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-full w-screen ${theme.backgroundWrap[2]} ${activeSection === 2 ? `animate-fadeIn-500` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-full w-screen ${theme.backgroundWrap[3]} ${activeSection === 3 ? `animate-fadeIn-500` : `animate-fadeOut`}`} />
        </div>
    )
}

export default BackgroundWrap
