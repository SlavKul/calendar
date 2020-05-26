import React from 'react'
import Event from './Event'

const style = {
    marginBottom: '10px',
    width: '99%',
    margin: 'auto 10px 10px'
}

const TableOfEvents = () => {
    return (
        <table className="ui selectable table" style={style}>   
            <tbody>
                <Event/>
                <Event/>
            </tbody>
        </table>
    )
}

export default TableOfEvents