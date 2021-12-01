import React from 'react'

const Person = (props:any) => {
    const { first, last } = props.human.name
    // const { key } = props.key

    return (
            <h6>
            {first} {last}
            <br/><br/>
            <img alt='' src={props.human.picture.large}/>
            <br/>
            <button 
                className={props.btnRed} 
                style={{margin : '10px'}} 
                onClick={() => props.deleteItem(props.human)}>Delete
            </button><hr/>
            </h6>
    )
}

export default Person
