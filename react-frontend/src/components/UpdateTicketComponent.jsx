import React, { Component } from 'react'
import TicketsService from '../services/TicketsService';

class updateTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ticketAuthor: '',
            ticketTitle: '',
            ticketStatus: '',
            ticketTimestamp: '',
            ticketDescription: ''
        }
        this.changeticketAuthorHandler = this.changeticketAuthorHandler.bind(this);    
        this.changeticketTitleHandler = this.changeticketTitleHandler.bind(this);
        this.updateTicket = this.updateTicket.bind(this);  
    }

    componentDidMount(){
        TicketsService.getTicketsById(this.state.id).then( (res) =>{
            let ticket = res.data;
            this.setState({ticketAuthor: ticket.ticketAuthor,
                ticketTitle: ticket.ticketTitle,
                ticketStatus : ticket.ticketStatus,
                ticketDescription: ticket.ticketDescription
            });
        });
    }

    updateTicket = (e) => {
        e.preventDefault();
        let ticket = {ticketAuthor: this.state.ticketAuthor, ticketTitle: this.state.ticketTitle, ticketStatus: this.state.ticketStatus, ticketDescription: this.state.ticketDescription};
        console.log('ticket => ' + JSON.stringify(ticket));
        console.log('id => ' + JSON.stringify(this.state.id));
        TicketsService.updateTickets(ticket, this.state.id).then( res => {
            this.props.history.push('/tickets');
        });
    }
    
    changeticketAuthorHandler= (event) => {
        this.setState({ticketAuthor: event.target.value});
    }

    changeticketTitleHandler= (event) => {
        this.setState({ticketTitle: event.target.value});
    }
            
    changeticketStatusHandler= (event) => {              
        this.setState({ticketStatus: event.target.value});
    }

    changeticketDescriptionHandler= (event) => {              
        this.setState({ticketDescription: event.target.value});
    }

    cancel(){
        this.props.history.push('/tickets');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update ticket</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="ticketAuthor" className="form-control" 
                                                value={this.state.ticketAuthor} onChange={this.changeticketAuthorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ticket Title: </label>
                                            <input placeholder="Ticket Title" name="ticketTitle" className="form-control" 
                                                value={this.state.ticketTitle} onChange={this.changeticketTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ticket Status: </label>
                                            <input placeholder="Ticket Status" name="ticketStatus" className="form-control" 
                                                value={this.state.ticketStatus} onChange={this.changeticketStatusHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Ticket Description: </label>
                                            <input placeholder="Ticket Description" name="ticketDescription" className="form-control" 
                                                value={this.state.ticketStatus} onChange={this.changeticketDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateTicket}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default updateTicketComponent
