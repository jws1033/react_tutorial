//다중 input 상태 관리 useState 와 onChange

import React , {useState , useRef} from 'react'

function InputSample(){
    const [text, setText] = useState({
        name:'',
        nickname:''
    })
    
     // DOM구조에 특정 위치에 어떤 처리를 하고 싶을떄
    //  Reset버튼 클릭시 name input에 focus가 가있도록 하기 위해 useRef활용
    const nameInput = useRef();
    // 다중 input 관리
    const {name , nickname} = text
    const onChange=(e)=>{
        // console.log(e.target)
        const {name, value} = e.target
        setText({
            ...text,
            [name]:value
        })
    }

    const onReset =()=>{
        setText({
            name:'',
            nickname:''
        });

        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" value={name} onChange={onChange} placeholder={'입력하세요'} ref={nameInput}/>
            <input name="nickname" value={nickname} onChange={onChange} placeholder={'닉네임을 입력하세요'}/>
            <button onClick={onReset} >초기화</button>
            <div>
    <b>값 :{name} {nickname !=='' ? <>({nickname})</> : ''  }</b>
            </div>
        </div>
    )
}

export default InputSample;