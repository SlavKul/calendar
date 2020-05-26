import React from 'react'
import List from './List/List'
import AddModal from './Modals/AddModal/index'
import moment from 'moment'

const data = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
]


const App = () => {
  const currentDate = moment()
  console.log(currentDate)
  return (
    <div className="ui segments">
        <List date={currentDate}/>
        <AddModal isShown={true}/>
    </div>
  )
}

export default App;