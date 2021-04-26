import React, { Component } from 'react'
import TicketsService from '../services/TicketsService';
import Moment from 'moment';


class CreateTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            ticketAuthor: '',
            ticketTitle: '',
            ticketStatus: '',
            ticketDescription: '',
            ticketTimestamp: Moment().format("DD-MM-YYYY hh:mm:ss")
        }
        this.changeticketAuthorHandler = this.changeticketAuthorHandler.bind(this);
        this.changeticketTitleHandler = this.changeticketTitleHandler.bind(this);
        this.saveOrUpdateticket = this.saveOrUpdateticket.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TicketsService.getTicketsById(this.state.id).then( (res) =>{
                let ticket = res.data;
                this.setState({ticketAuthor: ticket.ticketAuthor,
                    ticketTitle: ticket.ticketTitle,
                    ticketStatus : ticket.ticketStatus,
                    ticketTimestamp: ticket.ticketTimestamp,
                    ticketDescription: ticket.ticketDescription
                });
            });
        }        
    }
    saveOrUpdateticket = (e) => {
        e.preventDefault();
        let ticket = {ticketAuthor: this.state.ticketAuthor, ticketTitle: this.state.ticketTitle, ticketStatus: this.state.ticketStatus, ticketTimestamp: this.state.ticketTimestamp, ticketDescription: this.state.ticketDescription};
        console.log('ticket => ' + JSON.stringify(ticket));

        // step 5
        if(this.state.id === '_add'){
            TicketsService.createTickets(ticket).then(res =>{
                this.props.history.push('/tickets');
            });
        }else{
            TicketsService.updateTickets(ticket, this.state.id).then( res => {
                this.props.history.push('/tickets');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add ticket</h3>
        }else{
            return <h3 className="text-center">Update ticket</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Ticket Author: </label>
                                            <input placeholder="Ticket Author" name="ticketAuthor" className="form-control" 
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
                                            <label> Ticket Timestamp </label>  
                                            <input placeholder="Ticket Timestamp" name="ticketTimestamp" className="form-control" 
                                                value={this.state.ticketTimestamp} onChange={this.changeticketTimestampHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Ticket Description: </label>  
                                            <input placeholder="Ticket Description" name="ticketDescription" className="form-control" 
                                                value={this.state.ticketDescription} onChange={this.changeticketDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateticket}>Save</button>
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

export default CreateTicketComponent
