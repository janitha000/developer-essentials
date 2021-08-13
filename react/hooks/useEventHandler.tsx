import { useEffect } from "react"

interface UseEventHandlerProps {
    eventType: keyof DocumentEventMap,
    handler: () => void
}

const UseEventHandler = ({ eventType, handler }: UseEventHandlerProps) => {
    useEffect(() => {
        document.addEventListener(eventType, handler)
        return () => document.removeEventListener(eventType, handler)

    }, [eventType, handler])

}

export default UseEventHandler;