import React from 'react'
import ListView from './List/ListView'
import AddEditModal from './Modals/AddEditModal/AddEditModal'
import moment from 'moment'

const App = () => {
  const currentDate = moment()
  console.log(currentDate)
  return (
    <div>
        <ListView date={currentDate}/>
        <AddEditModal isShown={false}/>
    </div>
  )
}

export default App;