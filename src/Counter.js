// useState활용한 Component 관리
import React ,{useState} from 'react'

function Counter(){
    // Setter함수로 setNumber를 이용
    const [number , setNumber] = useState(0)
    const onIncrease =()=>{
        console.log(+1)
        // setNumber(number+1)
        setNumber(preNumber=>preNumber+1)

    }

    const onDecrease =()=>{
        console.log(-1)
        // setNumber(number-1)
        // 함수형으로 업데이트
        setNumber(preNumber=>preNumber-1)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>        
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;