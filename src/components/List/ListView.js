import React from 'react'
import ListOfMonth from './ListOfMonth'

const List = (props) => {
    const {date, nextYear, previousYear} = props
    console.log('RENDER LIST_VIEW')
    return (
        <div>
            <div>
                <i className="large chevron left icon" onClick={previousYear}></i>
                <p style={{display: 'inline'}}>{date.format('YYYY')}</p>
                <i className="large chevron right icon" onClick={nextYear}></i>
            </div>
            <ListOfMonth date={date}/> 
        </div>
    )
}

export default List