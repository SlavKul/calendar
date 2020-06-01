import React from 'react'
import Event from './Event'

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
                <div className="ui segment" name={this.props.name} date={this.props.date.format('YYYY MM')} onClick={this.showContent} style={{color: 'green'}}>
                    {this.props.children}
                        <p style={{display: 'inline', float: 'left'}}><div className="small ui label">1</div></p>
                        <i className={chevron} style={{float: 'right'}}></i> 
                </div>
                {this.state.isShown ?
                        <table className="ui table">   
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>StartTime</th>
                                    <th>EndTime</th>
                                    <th>Location</th>
                                    <th>Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Event/>
                                <Event/>
                            </tbody>
                        </table>
                : null}
            </div>
        ) 
    }
    
}

export default MonthHeader