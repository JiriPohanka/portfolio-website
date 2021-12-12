import tw from 'twin.macro'

const lightTheme = {
    header: {
        wrap: {
            0: tw`flex items-stretch sticky top-0 z-20 text-gray-100 transition-colors duration-500`,
            1: tw`flex sticky top-0 text-gray-100 z-20 transition-colors duration-500`,
            2: tw`flex sticky top-0 text-gray-700 z-20 transition-colors duration-500`,
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
        },
        nav: {
            bgrColorActive: {
                0: `bg-transparent transition-colors duration-3000 text-gray-900 p-4 hover:bg-transparent`,
                1: `bg-transparent transition-colors duration-3000 text-gray-900 p-4 hover:bg-transparent`,
                2: `bg-transparent transition-colors duration-3000 text-gray-900 p-4 hover:bg-transparent`,
            },
            bgrColor: {
                0: `bg-gray-900 transition-colors duration-1000 text-gray-300 p-4 hover:bg-green-500`,
                1: `bg-gray-900 transition-colors duration-1000 text-gray-300 p-4 hover:bg-yellow-500`,
                2: `bg-gray-900 transition-colors duration-1000 text-gray-300 p-4 hover:bg-gray-700`,
            }
        }
    },
    section: {
        bgrColor: {
            0: tw`bg-transparent relative z-10`,
            1: tw`bg-transparent relative z-10`,
            2: tw`bg-transparent relative z-10`,
        }
    },
}

const darkTheme = {
    header: {
        wrap: {
            0: tw`flex items-stretch sticky top-0 z-20 text-gray-100 transition-colors duration-500`,
            1: tw`flex sticky top-0 text-gray-100 z-20 transition-colors duration-500`,
            2: tw`flex sticky top-0 text-gray-700 z-20 transition-colors duration-500`,
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
        },
        nav: {
            bgrColorActive: {
                0: `bg-transparent transition-colors duration-500 text-gray-900 p-4`,
                1: `bg-transparent transition-colors duration-500 text-gray-900 p-4`,
                2: `bg-transparent text-white p-4`,
            },
            bgrColor: {
                0: `bg-gray-900 transition-colors duration-500 text-gray-300 p-4 hover:bg-gray-300`,
                1: `bg-gray-900 transition-colors duration-500 text-black p-4 hover:bg-gray-300`,
                2: `bg-gray-900 text-white p-4 hover:bg-gray-300`,
            }
        }
    },
    section: {
        bgrColor: {
            0: tw`bg-transparent relative z-10`,
            1: tw`bg-transparent relative z-10`,
            2: tw`bg-transparent relative z-10`,
        }
    },
}



export { lightTheme, darkTheme }
