// props를 활용하는 기본 방법
// defaultProps 활용한 방법
// 조건부 랜더링

import React from 'react';

// function Hello(props){
//     return <div style={{color:props.color}}> 안녕하세요 {props.name}  </div>
// }

function Hello({color , name , isSpecial}){
    return (<div style={{color}}> 
            {/* true false 상황에서 간단하게 &&를 이용할 수 있다. */}
            {isSpecial && <b>**</b>}
            {/* {isSpecial ? <b>**</b> : null} */}
            안녕하세요 {name}  
            </div>
    )
}

Hello.defaultProps = {
    name:"대전"
}

export default Hello;