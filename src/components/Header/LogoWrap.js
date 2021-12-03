import styled from "styled-components"
import tw from "twin.macro"

const LogoWrap = ({ className }) => {

    const content = "masopusto.cz"

    return (
        <div className="p-4">
            {content}
        </div>
    )
}

const StyledLogoWrap = styled(LogoWrap)`
${tw`flex p-4`}
`

export default StyledLogoWrap
