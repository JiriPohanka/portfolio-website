import tw from 'twin.macro'

const lightTheme = {
    header: {
        textColor: {
            0: tw`flex bg-gray-900 sticky top-0 text-gray-100 transition-colors duration-1000`,
            1: tw`flex bg-gray-900 sticky top-0 text-gray-100 transition-colors duration-1000`,
            2: tw`flex bg-gray-900 sticky top-0 text-gray-700 transition-colors duration-1000`,
        },
        nav: {
            bgrColor: {
                0: `bg-green-400 transition-colors duration-1000 text-gray-900`,
                1: `bg-yellow-400 transition-colors duration-1000 text-black`,
                2: `text-white`,
            }
        }
    },
    section: {
        bgrColor: {
            0: tw`bg-green-400 transition-colors duration-1000 delay-100`,
            1: tw`bg-yellow-400 transition-colors duration-1000 delay-100`,
            2: tw`bg-gray-900 transition-colors duration-1000 delay-100`,
        }
    }
}

const darkTheme = {
    header: {
        textColor: {
            0: tw`flex bg-yellow-900 sticky top-0 text-gray-100 transition-colors duration-1000`,
            1: tw`flex bg-yellow-900 sticky top-0 text-gray-100 transition-colors duration-1000`,
            2: tw`flex bg-yellow-900 sticky top-0 text-gray-700 transition-colors duration-1000`,
        },
        nav: {
            bgrColor: {
                0: `bg-green-400 transition-colors duration-1000 text-gray-900`,
                1: `bg-yellow-400 transition-colors duration-1000 text-black`,
                2: `text-white`,
            }
        }
    },
    section: {
        bgrColor: {
            0: tw`bg-green-400 transition-colors duration-1000 delay-100`,
            1: tw`bg-yellow-400 transition-colors duration-1000 delay-100`,
            2: tw`bg-gray-900 transition-colors duration-1000 delay-100`,
        }
    }
}



export { lightTheme, darkTheme }
