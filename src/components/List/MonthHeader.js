import React from 'react'
import axios from 'axios'
import Event from './Event'

class MonthHeader extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isShown: this.props.isShown,
            isFetched: this.props.isShown,
            events: [],
            numberOfEvents: 0,
            startDate: this.props.date.startOf('month').format('YYYY-MM-DD'),
            endDate: this.props.date.endOf('month').format('YYYY-MM-DD')
        }
        console.log('Constructor', this.props.isShown, this.props.date.format('YYYY-MM-DD'))
    }
 

    componentDidMount () {
        console.log('DidMount')
        const url = `http://localhost:8083/v1/calendar/api/events?end=${this.state.endDate}T23%3A59%3A59&start=${this.state.startDate}T00%3A00%3A00`
            axios.get(url)
                .then(response=> {
                    if(this.state.isShown){
                        return this.setState({
                            events: response.data,
                            isFetched: true,
                            numberOfEvents: response.data.length
                        })
                    }
                    return this.setState({
                        numberOfEvents: response.data.length
                    })
                })
    }

    componentDidUpdate(prevProps){
        console.log('DidUpdate')
        console.log(this.state.isFetched)
        const url = `http://localhost:8083/v1/calendar/api/events?end=${this.state.endDate}T23%3A59%3A59&start=${this.state.startDate}T00%3A00%3A00`
        if(prevProps.date !== this.props.date){
            console.log('DATE WAS CHANGED')
            this.setState({
                isFetched: this.props.isShown,
                isShown: this.props.isShown,
                events: [],
                numberOfEvents: 0,
                startDate: this.props.date.startOf('month').format('YYYY-MM-DD'),
                endDate: this.props.date.endOf('month').format('YYYY-MM-DD')
            })
        }
        if(!this.state.isFetched && this.state.isShown && (prevProps.isShown === false)){
            axios.get(url)
                .then(response=> {
                    this.setState({
                        events: response.data,
                        numberOfEvents: response.data.length,
                        isFetched: true
                    })
                })
        }
    }

    showContent = () =>{
        console.log('I show content')
        this.setState({
            isShown: !this.state.isShown
        })
    }

    render() {
        console.log('Render', this.state.isShown, this.state.isFetched, this.props.date.format('YYYY-MM'))
        const events = this.state.events.map(event=>{
            return <Event key={event.id} event={event}/>
        })
        let chevron = this.state.isShown? 'chevron up icon' : 'chevron down icon'
        return (
            <div>
                <div 
                className="ui segment"
                isfetched={`${this.state.isFetched}`}
                name={this.props.name} 
                date={this.props.date.format('YYYY-MM')} 
                onClick={this.showContent}>
                    <div className="small ui label" style={{display: 'inline', float: 'left'}}>{this.state.numberOfEvents}</div>
                    {this.props.date.format('YYYY-MM')}
                    <i className={chevron} style={{float: 'right'}}></i> 
                </div>
                {this.state.isShown ?
                        <table className="ui table">   
                            <thead>
                                <tr>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                               {events}
                            </tbody>
                        </table>
                : null}
            </div>
        ) 
    }
    
}

export default MonthHeader