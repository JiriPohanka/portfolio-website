const BackgroundWrap = (props) => {
    const { activeSection } = props

    return (
        <div className="absolute top-0 h-full">
            <div className={`absolute top-0 h-full w-screen bg-gradient-to-r from-teal-200 via-teal-100 to-teal-200 ${activeSection === 0 ? `animate-fadeIn-500` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-full w-screen bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 ${activeSection === 1 ? `animate-fadeIn` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-full w-screen bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-200 ${activeSection === 2 ? `animate-fadeIn-500` : `animate-fadeOut`}`} />
            <div className={`absolute top-0 h-full w-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 ${activeSection === 3 ? `animate-fadeIn-500` : `animate-fadeOut`}`} />
        </div>
    )
}

export default BackgroundWrap
