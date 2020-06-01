import React from 'react'

const Header = (props) => {
    return(
        <div class="ui top attached tabular menu">
            <a class="active item">
                List
            </a>
            <a class="item">
                Calendar
            </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui transparent icon input">
                        <button className="mini ui right floated button">New event</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header