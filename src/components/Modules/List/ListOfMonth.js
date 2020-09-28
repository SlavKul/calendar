import React from "react";
import MonthHeader from "./MonthHeader";
import moment from "moment";
import axios from "axios";

const ListOfMonth = ({ date }) => {
  /*const listOfMonth = moment.months()
    const listItems = listOfMonth.map((item, index)=> {
        const monthDate = date.clone().month(index);
        return <MonthHeader 
            key={index} 
            name={item} 
            isShown={moment().format('YYYY-MM') === monthDate.format('YYYY-MM') ? true : false} 
            date={monthDate}>
                {item}
        </MonthHeader>
    })
    return (
        <div  style={{padding: '0px 10px'}}>
            <ul style={{paddingInlineStart: '0px'}}>
                {listItems.reverse()}
            </ul>
        </div>
    )*/
};

export default ListOfMonth;
