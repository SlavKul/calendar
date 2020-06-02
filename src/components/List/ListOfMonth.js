import React from 'react'
import MonthHeader from './MonthHeader'
import moment from 'moment'

class ListOfMonth extends React.Component {
    state={
        currentDate: moment()
    }
    render() {
        const todayMonth = moment().months()
        const listOfMonth = moment.months()
        const listItems = listOfMonth.map((item, index)=>
            <MonthHeader 
                key={index} 
                name={todayMonth} 
                isShown={index===todayMonth ? true : false} 
                date={this.state.currentDate}>{item}
            </MonthHeader>
        )
        return (
            <div  style={{padding: '0px 10px'}}>
                <div>
                    <i className="large chevron left icon"></i>
                    <p style={{display: 'inline'}}>{this.state.currentDate.format('YYYY')}</p>
                    <i className="large chevron right icon"></i>
                </div>
                <ul style={{paddingInlineStart: '0px'}}>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ListOfMonth