import React from 'react'

function Person(props) {
    //never use key as a part of the props,it will throw errors
    const {name,age,skill}=props.person
    return <h2 >  I am {name} and I am {age} years old and I know {skill} </h2>
      
}

export default Person
