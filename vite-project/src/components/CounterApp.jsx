
import { useState } from 'react'
function CounterApp() {

    const [count, setCount] = useState(0);  

    const tang = () => {
        setCount(count + 1);
    };
    const giam = () => {
        if(count === 0) return;
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    }
    return(
        <div>
            <h2>Counter App</h2>
            <h3 style={{ color: count > 10 ? 'red' : 'black' }}
            >Count: {count}</h3>
            <button onClick={tang}>Tang</button>
            <button onClick={giam}>Giam</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterApp;