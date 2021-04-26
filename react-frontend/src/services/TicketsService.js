import axios from 'axios';

const TICKET_API_BASE_URL = "http://52.214.126.149:8080/api/v1/tickets";
// const TICKET_API_BASE_URL = "http://app-backend:8080/api/v1/tickets"; //aws endpoint ec2

class TicketsService {

    getTickets(){
        return axios.get(TICKET_API_BASE_URL);
    }

    createTickets(ticket){
        return axios.post(TICKET_API_BASE_URL, ticket);
    }

    getTicketsById(ticketId){
        return axios.get(TICKET_API_BASE_URL + '/' + ticketId);
    }

    updateTickets(ticket, ticketId){
        return axios.put(TICKET_API_BASE_URL + '/' + ticketId, ticket);
    }

    deleteTickets(ticketId){
        return axios.delete(TICKET_API_BASE_URL + '/' + ticketId);
    }
}

export default new TicketsService()