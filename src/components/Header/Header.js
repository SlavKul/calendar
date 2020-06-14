import React from 'react'
import Tab from './Tab'


class Header extends React.Component {
    
    state={
        activeTab: 'listView',
    }
    
    render(){
        console.log('RENDER HEADER')
        const tabs = this.props.tabs.map((tab)=>{
            let classes = 'item'
            if(tab === this.props.activeTab){
                classes = 'active item'
            }
            return <Tab key={tab} data={tab} classes={classes} switchTab={this.props.switchTab}>{tab}</Tab>
        })
        return(
            <div>
                <div className="ui top attached tabular menu">
                    {tabs}
                    <div className="right menu">
                        <div className="item">
                            <div className="ui transparent icon input">
                                <button className="mini ui right floated button" onClick={this.props.openModal}>New event</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui bottom attached active tab segment">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Header