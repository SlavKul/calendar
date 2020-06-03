import React from 'react'
import MonthHeader from './MonthHeader'
import moment from 'moment'

const ListOfMonth = ({date}) => {
    const todaysMonth = date.months()
    const listOfMonth = moment.months()
    const listItems = listOfMonth.map((item, index)=>
        <MonthHeader 
            key={index} 
            name={item} 
            isShown={index === todaysMonth ? true : false} 
            date={`${date.format('YYYY')} ${index}`}>
                {item}
        </MonthHeader>
    )
    return (
        <div  style={{padding: '0px 10px'}}>
            <ul style={{paddingInlineStart: '0px'}}>
                {listItems.reverse()}
            </ul>
        </div>
    )
}

export default ListOfMonth