import React from 'react'
import MonthHeader from './MonthHeader'
import moment from 'moment'

const ListOfMonth = () => {
    const todayMonth = moment().months()
    const listOfMonth = moment.months()
    const listItems = listOfMonth.map((item, index)=>
        <MonthHeader key={index} name={todayMonth} isShown={index===todayMonth ? true : false}>{item}</MonthHeader>
    )
    return (
        <div className="ui segment" style={{padding: '5px'}}>
            <ul style={{paddingInlineStart: '0px'}}>
                {listItems}
            </ul>
        </div>

        
    )


}

export default ListOfMonth