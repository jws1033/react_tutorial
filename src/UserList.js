// useRef를 활용한 Component안에 변수 만들기
import React from 'react'


// function UserList(){
//     const users = [
//         {
//             id:1,
//             username:"KIM",
//             email:"1@naver.com"
//         },
//         {
//             id:1,
//             username:"PARK",
//             email:"2@naver.com"
//         },
//         {
//             id:1,
//             username:"SONG",
//             email:"3@naver.com"
//         }
//     ]
//     return (
//         <div>
//             <div><b>{users[0].username}: </b> <span>{users[0].email}</span></div>
//             <div><b>{users[1].username}: </b> <span>{users[1].email}</span></div>
//             <div><b>{users[2].username}: </b> <span>{users[2].email}</span></div>
//         </div>
//     )
// }

var User = ({user ,Key,  onRemove})=>{
    return (
        <div>
            <ul>
            <li Key={user.id}><b>{user.username } : </b> <span> {user.email}</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button> 
            </li>
            </ul>
            
        </div>
    )
}


function UserList({users ,  onRemove}){
    
    return (
        <div>
           {users.map(user =>(
                <User user= {user} onRemove={onRemove} />
            ))
           } 
        </div>
    )
}

export default UserList;


