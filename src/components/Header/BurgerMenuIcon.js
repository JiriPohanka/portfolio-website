import React from "react";

function BurgerMenuIcon({ fill }) {

    return (
        <svg viewBox="0 0 80 60" width="26" height="26">
            <rect fill={fill} width="80" height="6"></rect>
            <rect fill={fill} y="25" width="80" height="6"></rect>
            <rect fill={fill} y="50" width="80" height="6"></rect>
        </svg>
    )
}

export default BurgerMenuIcon
