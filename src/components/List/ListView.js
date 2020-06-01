import React from 'react'
import Header from './Header'
import ListOfMonth from './ListOfMonth'

const List = ({date}) => {
    //const [count, setCount] = useState(date);
    //TODO: do class component and add actual date to class state or Hook
    return (
        <div>
            <Header date={date.format('YYYY')}/>
            <ListOfMonth />
        </div>
    )
}

export default List