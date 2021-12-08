import tw from 'twin.macro'

const lightTheme = {
    header: {
        textColor: {
            0: tw`flex items-stretch sticky top-0 text-gray-100 transition-colors duration-1000`,
            1: tw`flex sticky top-0 text-gray-100 transition-colors duration-1000`,
            2: tw`flex sticky top-0 text-gray-700 transition-colors duration-1000`,
        },
        logoWrap: {
            0: tw`flex w-2/5 p-4 bg-gray-900 mr-auto`,
            1: tw`flex w-2/5 p-4 bg-gray-900 mr-auto`,
            2: tw`flex w-2/5 p-4 bg-gray-900 mr-auto`,
        },
        toggleWrap: {
            0: tw`flex w-2/5 p-4 bg-gray-900 ml-auto`,
            1: tw`flex w-2/5 p-4 bg-gray-900 ml-auto`,
            2: tw`flex w-2/5 p-4 bg-gray-900 ml-auto`,
        },
        nav: {
            bgrColorActive: {
                0: `bg-transparent transition-colors duration-1000 text-gray-900 p-4 hover:bg-gray-100`,
                1: `bg-transparent transition-colors duration-1000 text-black p-4 hover:bg-gray-100`,
                2: `bg-transparent text-white p-4 hover:bg-gray-100`,
            },
            bgrColor: {
                0: `bg-gray-900 transition-colors duration-1000 text-gray-900 p-4 hover:bg-gray-100`,
                1: `bg-gray-900 transition-colors duration-1000 text-black p-4 hover:bg-gray-100`,
                2: `bg-gray-900 text-white p-4 hover:bg-gray-100`,
            }
        }
    },
    section: {
        bgrColor: {
            0: tw` transition-all duration-1000 delay-100 bg-gradient-to-r from-green-300 via-green-500 to-green-400 `,
            1: tw` transition-all duration-1000 delay-100 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 `,
            2: tw` transition-all duration-1000 delay-100 bg-gray-900 `,
        }
    }
}

const darkTheme = {
    header: {
        textColor: {
            0: tw`flex items-stretch sticky top-0 text-gray-100 transition-colors duration-1000`,
            1: tw`flex sticky top-0 text-gray-100 transition-colors duration-1000`,
            2: tw`flex sticky top-0 text-gray-700 transition-colors duration-1000`,
        },
        logoWrap: {
            0: tw`flex w-2/5 p-4 bg-gray-900 mr-auto`,
            1: tw`flex w-2/5 p-4 bg-gray-900 mr-auto`,
            2: tw`flex w-2/5 p-4 bg-gray-900 mr-auto`,
        },
        toggleWrap: {
            0: tw`flex w-2/5 p-4 bg-gray-900 ml-auto`,
            1: tw`flex w-2/5 p-4 bg-gray-900 ml-auto`,
            2: tw`flex w-2/5 p-4 bg-gray-900 ml-auto`,
        },
        nav: {
            bgrColorActive: {
                0: `bg-transparent transition-colors duration-1000 text-gray-900 p-4 hover:bg-gray-100`,
                1: `bg-transparent transition-colors duration-1000 text-black p-4 hover:bg-gray-100`,
                2: `bg-transparent text-white p-4 hover:bg-gray-100`,
            },
            bgrColor: {
                0: `bg-green-400 transition-colors duration-1000 text-gray-900 p-4 hover:bg-gray-100`,
                1: `bg-yellow-400 transition-colors duration-1000 text-black p-4 hover:bg-gray-100`,
                2: `text-white p-4 hover:bg-gray-100`,
            }
        }
    },
    section: {
        bgrColor: {
            0: tw`bg-gray-400 transition-colors duration-1000 delay-100`,
            1: tw`bg-yellow-400 transition-colors duration-1000 delay-100`,
            2: tw`bg-gray-900 transition-colors duration-1000 delay-100`,
        }
    }
}



export { lightTheme, darkTheme }
