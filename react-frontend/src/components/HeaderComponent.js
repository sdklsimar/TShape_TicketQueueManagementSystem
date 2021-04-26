import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-success">
                    <div><a href="http://localhost:3000" className="navbar-brand">Ticket Queue Log Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
