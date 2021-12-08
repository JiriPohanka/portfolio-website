const NightModeButton = ({ darkMode, setDarkMode }) => {

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={handleClick}>
            toggle
        </button>
    )
}

export default NightModeButton
