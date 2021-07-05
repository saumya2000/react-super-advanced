import React from 'react'
import Person  from './Person'

function NameListFive() {
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

    const personList=persons.map(person=><Person  key={person.id} person={person} />)

    
    return <div>{personList}</div>
    
}

export default NameListFive
