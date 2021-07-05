import React from 'react'

//?WITH USING JSX
// function Hello() {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )
// }


//?WITHOUT USING JSX
const Hello=()=>{
    return React.createElement('div',{id:'dvHeader',className:'dvClass'},
    React.createElement('h1',{id:'h1Header',className:'h1Class'},'Hello World without using jsx'))
}

export default Hello
