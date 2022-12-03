import {useEffect, useState} from 'react';

const Counter = () => {
    const [clicks, setClicks] = useState(0)
    const [step, setSteps] = useState(1)

    const showValue = () => {
        setTimeout(() => {
            alert(clicks)
        }, 3000)
    }

    useEffect(()=>{
        document.title = `Component rendered. Clicks: ${clicks}; step is: ${step}`
        setSteps((prevValue)=> prevValue + 1)
    },[clicks, setSteps])


    return (
        <>
            <div>Clicked: {clicks}</div>
            <button onClick={() => setClicks(clicks + step)}>Click</button>
            <br/>
            <button onClick={showValue}>Show Value</button>
            <br/>
            <input name="step" value={step} onChange={(e) => setSteps(Number(e.target.value))}/>
        </>
    )
}

export default Counter