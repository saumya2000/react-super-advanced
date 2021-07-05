import React from 'react'

function NameListFour() {
    const persons=[{
        id:1,
        name:"scott",
        age:34,
        skill:"full stack"
    },
    {
        id:2,
        name:"adam",
        age:43,
        skill:"react"
    },
    {
        id:3,
        name:"eve",
        age:35,
        skill:"C++"
    },
    {
        id:4,
        name:"harry",
        age:45,
        skill:"angular"
    }
    ]

    const personList=persons.map(person=>{
        return (
            <h2 key={person.id}>
                I am {person.name} and I am {person.age} years old and I know {person.skill} 
           </h2>
        )
    })

    // console.log(personList)
    return <div>{personList}</div>
    
}

export default NameListFour
