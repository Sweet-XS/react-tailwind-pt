export const CodeSamples = {
    "App.jsx": `
    import { useRef, useState } from "react"

    export const StopWatch = () => {

        const [time, setTime] = useState(0)
        const intervalRef = useRef(null)

        const start = () => {
            intervalRef.current =setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000)
        }

        const stop = () => {
            clearInterval(intervalRef.current)
        }

        return (
            <div>
                <h2>Stopwatch time: {time}</h2>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>

            </div>
        )
    }
    `,
    "Navy.jsx": `
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

    export const NavButton = ({onClick}) => {

        return (
            <button 
                className="bg-blue-400 text-blue-200 rounded-md"
                onClick={onClick}
            >
                <FontAwesomeIcon className='m-2' icon={faCircleArrowLeft} size="3x" />
            </button>
        )
    }
    `,
    "Classy.jsx": `
    import { useReducer } from "react"

    // useReducer
    const initialState = 0
    const reducer = (state, action) => {
        switch(action) {
            case "increment":
                return state + 1
            case "decrement":
                return state - 1
            case "reset":
                return initialState
            default:
                return state
        }
    }

    export const CounterReducer = () => {

        const [count, dispatch] = useReducer(reducer, initialState)

        return (
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
                <button onClick={() => dispatch("reset")}>Reset</button>
            </div>
        )
    }
    `
}