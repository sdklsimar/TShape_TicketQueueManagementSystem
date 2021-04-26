import React, { Component } from 'react'
import TicketsService from '../services/TicketsService'

class ViewTicketComponent extends Component {  
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ticket: {}
        }
    }

    componentDidMount(){
        TicketsService.getTicketsById(this.state.id).then( res => {
            this.setState({ticket: res.data});
        })
    }
   
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Ticket Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Ticket Author: </label>
                            <div> { this.state.ticket.ticketAuthor }</div>
                        </div>
                        <div className = "row">
                            <label>  Ticket Title: </label>
                            <div> { this.state.ticket.ticketTitle }</div>
                        </div>
                        <div className = "row">
                            <label> Ticket Description: </label>
                            <div> { this.state.ticket.ticketDescription }</div>
                        </div>
                        <div className = "row">
                            <label> Ticket Status: </label>
                            <div> { this.state.ticket.ticketStatus }</div>
                        </div>
                        <div className = "row">
                            <label> Ticket Timestamp: </label>
                            <div> { this.state.ticket.ticketTimestamp }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTicketComponent
