import React, {useState} from "react"
import styles from "./Counter.module.css"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(c => c = 0)
    }

    return (
        <div className={styles.counterContainer}>
            <p className={styles.countDisplay}>{ count }</p>
            <button className={styles.counterBtn} onClick={decrement}>Decrement</button>
            <button className={styles.counterBtn} onClick={reset}>Reset</button>
            <button className={styles.counterBtn} onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter