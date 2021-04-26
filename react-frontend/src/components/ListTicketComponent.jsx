import React, { Component } from 'react'
import TicketsService from '../services/TicketsService'

class ListTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tickets: []
        }
        this.addTicket = this.addTicket.bind(this);
        this.editTicket = this.editTicket.bind(this);
        this.deleteTicket = this.deleteTicket.bind(this);
    }

    deleteTicket(id){
        TicketsService.deleteTickets(id).then( res => {
            this.setState({tickets: this.state.tickets.filter(ticket => ticket.id !== id)});
        });
    }
    viewTicket(id){
        this.props.history.push(`/view-ticket/${id}`);
    }
    editTicket(id){
        this.props.history.push(`/add-ticket/${id}`);
    }

    componentDidMount(){
        TicketsService.getTickets().then((res) => {
            this.setState({ tickets: res.data});
        });
    }

    addTicket(){
        this.props.history.push('/add-ticket/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Tickets List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTicket}> Add Ticket</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>   
                                    <th> Ticket Author</th>
                                    <th> Ticket Title</th>
                                    <th> Ticket Description</th>
                                    <th> Ticket Status </th>  
                                    <th> Ticket Created At </th> 
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tickets.map(
                                        ticket => 
                                        <tr key = {ticket.id}>
                                             <td> {ticket.ticketAuthor} </td>   
                                             <td> {ticket.ticketTitle}</td>
                                             <td> {ticket.ticketDescription}</td>
                                             <td> {ticket.ticketStatus}</td>
                                             <td> {ticket.ticketTimestamp}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editTicket(ticket.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTicket(ticket.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTicket(ticket.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTicketComponent
