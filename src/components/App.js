import React from 'react'
import ListView from './List/ListView'
import Header from './Header/Header'
import AddEditModal from './Modals/AddEditModal/AddEditModal'
import moment from 'moment'

const tabs = ['list', 'calendar']

class App extends React.Component {
  state = {
    customDate: moment(),
    currentDate: moment(),
    activeTab: tabs[0],
    isAddModalOpen: false,
  }

  switchTabHandler = (data) => {
    this.setState({
      activeTab: data
    }) 
  }

  openAddModalHandler = () => {
    console.log('Opening...')
    this.setState({
      isAddModalOpen: true
    }) 
  }

  closeModal = () => {
    console.log('Closing...')
    this.setState({
      isAddModalOpen: false
    })
  }

  navigateToNextYear = () => {
    const newDate = this.state.customDate.clone().add(1 , 'year')
    this.setState({
      customDate: newDate
    })
  }

  navigateToPreviousYear = () => {
    const newDate = this.state.customDate.clone().subtract(1 , 'year')
    console.log(this.state.customDate.format('YYYY'), 'CLicking preveios year', newDate.format('YYYY'))
    this.setState({
      customDate: newDate
    })
  }

  render(){
    let content = <h1>Calendar</h1>
    if(this.state.activeTab === tabs[0]){
      content = <ListView 
        date={this.state.customDate}
        nextYear={this.navigateToNextYear}
        previousYear={this.navigateToPreviousYear}/>
    }
    return (
      <div>
        <Header
          date={this.state.currentDate} 
          tabs={tabs}
          activeTab={this.state.activeTab}
          switchTab={this.switchTabHandler}
          openModal={this.openAddModalHandler}>
            {content}
        </Header>
        <AddEditModal isShown={this.state.isAddModalOpen} closeModal={this.closeModal}/>
      </div>
    )
  }
}


export default App;