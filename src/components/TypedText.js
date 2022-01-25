import { useState, useEffect, useRef } from "react"

const TypedText = ({ textArr, period = 2000 }) => {

    // const [isBlinking, setIsBlinking] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [i, setI] = useState(0)
    const [tickDelay, setTickDelay] = useState(0)
    const spanEl = useRef()

    const tick = () => {
        const textFull = textArr[i];
        // (textFull)

        if (isDeleting) {
            setText(() => textFull.substring(0, text.length - 1))
            // (text.length, isDeleting)
        } else {
            setText(() => textFull.substring(0, text.length + 1))
            // (text.length, isDeleting)
        }

        let delay = 200 - Math.random() * 100

        if (isDeleting && text.length > 0) {
            setTickDelay(() => delay / 2)
        }

        if (!isDeleting && text === textFull) {
            setTickDelay(() => period)
            setIsDeleting(() => true)

        } else if (isDeleting && text.length === 0) {
            setIsDeleting(() => false)
            i < (textArr.length - 1) ? setI(() => i + 1) : setI(() => 0)
            setTickDelay(() => 500)
        }

        setTimeout(function () {
            tick()
        }, tickDelay)
    }

    window.onload = function () {
        tick()
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         ("tick")
    //         tick()
    //     }, tickDelay)
    // })

    useEffect(() => {
        (spanEl.current.textContent)
            (text)
        spanEl.current.textContent = text
    }, [text])
    return (
        <span ref={spanEl}>
            {text}
        </span>
    )
}

export default TypedText
