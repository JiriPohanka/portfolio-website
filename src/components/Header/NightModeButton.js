const NightModeButton = ({ darkMode, setDarkMode }) => {

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button className="ml-auto" onClick={handleClick}>
            {darkMode ? "lightmode" : "darkmode"}
        </button>
    )
}

export default NightModeButton
