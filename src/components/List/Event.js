import React from 'react'

const Event = (props) =>{
    console.log('Rendered Event')
    return (
        <tr>
            <td>{props.event.notes}</td>
        </tr>
    )
}

export default Event