import React from 'react'
import ListView from './List/ListView'
import Header from './Header/Header'
import AddEditModal from './Modals/AddEditModal/AddEditModal'
import moment from 'moment'

const tabs = ['list', 'calendar']

class App extends React.Component {
  state = {
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

  render(){
    let content = <h1>Calendar</h1>
    if(this.state.activeTab === tabs[0]){
      content = <ListView date={this.props.date}/>
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