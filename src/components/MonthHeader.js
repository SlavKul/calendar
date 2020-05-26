import React from 'react'
import TableOfEvents from './TableOfEvents'

class MonthHeader extends React.Component {
    state={
        isShown: this.props.isShown
    }

    showContent = () =>{
        this.setState({
            isShown: !this.state.isShown
        })
    }

    render() {
        let chevron = this.state.isShown? 'chevron up icon' : 'chevron down icon'
        return (
            <div>
                <div className="ui segment" name={this.props.name} onClick={this.showContent}>
                    {this.props.children}
                        <p style={{display: 'inline', float: 'left'}}><div className="small ui label">1</div></p>
                        <i className={chevron} style={{float: 'right'}}></i> 
                </div>
                {this.state.isShown ?
                    <TableOfEvents/>
                : null}
            </div>
        ) 
    }
    
}

export default MonthHeader