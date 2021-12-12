const BackgroundWrap = (props) => {

    const { activeSection } = props
    console.log("backgroundcol: " + activeSection)

    return (
        <div className="absolute top-0 z-0">
            <div className={`absolute top-0 h-screen-300 w-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 ${activeSection === 0 ? `animate-fadeIn` : activeSection === 1 ? `animate-fadeOut` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-screen-300 w-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 ${activeSection === 0 ? `animate-fadeOut` : activeSection === 1 ? `animate-fadeIn` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-screen-300 w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 ${activeSection === 0 ? `animate-fadeOut` : activeSection === 1 ? `animate-fadeOut` : `animate-fadeIn`}`} />
        </div>
    )
}

export default BackgroundWrap
