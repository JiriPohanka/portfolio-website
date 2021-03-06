import tw from 'twin.macro'

const lightTheme = {
    backgroundWrap: {
        0: "bg-gradient-to-r from-teal-200 via-teal-100 to-teal-200",
        1: "bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200",
        2: "bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-200",
        3: "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
    },
    projectCard: {
        bgrCol: "white"
    },
    projectButton: {
        fontCol: "text-black",
        bgrCol: "bg-cyan-300",
        borderCol: "border-cyan-500 hover:border-cyan-800"
    },
    header: {
        fontColor: {
            primary: "#121212",
            secondary: "#33333"
        },
        wrap: {
            logoWrap: tw`bg-transparent`,
            toggleWrap: tw`bg-transparent`,
        },
        nav: {
            bgrColorActive: `bg-transparent font-bold hover:bg-transparent`,
            bgrColor: `bg-transparent hover:bg-gray-300`,
        },
        mobileNav: {
            bgrCol: `bg-gray-200`
        }
    },
    section: {
        bgrColor: "transparent",
        fontColPrimary: "#131313"
    },
    h1: tw`text-4xl`
}

const darkTheme = {
    backgroundWrap: {
        0: "bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900",
        1: "bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900",
        2: "bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900",
        3: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    },

    projectCard: {
        bgrCol: "#353535"
    },
    projectButton: {
        fontCol: "text-white",
        bgrCol: "bg-cyan-800",
        borderCol: "border-cyan-500 hover:border-cyan-200"
    },
    header: {
        fontColor: {
            primary: "#dddddd",
            secondary: "#d8d8d8"
        },
        wrap: {
            logoWrap: tw`bg-transparent`,
            toggleWrap: tw`bg-transparent`,
        },
        nav: {
            bgrColorActive: `bg-transparent font-bold hover:bg-transparent`,
            bgrColor: `transform transition-all duration-300 bg-transparent hover:bg-cyan-800`,
        },
        mobileNav: {
            bgrCol: `bg-gray-800`
        }
    },
    section: {
        bgrColor: "transparent",
        fontColPrimary: "#ddd"
    },
    h1: tw`text-4xl`
}



export { lightTheme, darkTheme }
