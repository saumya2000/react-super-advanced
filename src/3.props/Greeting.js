import React from 'react'

function Greeting(props) {
    const {name,skill,children}=props
    return (
        <div>
            <h2>Developer Name: {name} and Skill:{skill}</h2>
            <p>{children}</p>
        </div>
    )
}


// function Greeting({name,skill,children}) {
//     return (
//         <div>
//             <h1>Developer Name: {name} and Skill:{skill}</h1>
//             <p>{children}</p>
//         </div>
//     )
// }


export default Greeting

//props are used in functional components
//it can be used in class but we will have to use this

