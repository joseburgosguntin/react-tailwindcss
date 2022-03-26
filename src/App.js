import './App.css';

const { useState, useEffect } = require("react");

function App() {

    const [count, setCount] = useState(0)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        alert('hello side effect!')

        return () => alert("goodbye component!")
    })

    useEffect(() => {
        fetch('foo').then(() => setLoaded(true) )
    },
    [count]
    )

    return (
        <button onClick={() => setCount(count + 1)}>
        {count}
    </button>) 
}

export default App;