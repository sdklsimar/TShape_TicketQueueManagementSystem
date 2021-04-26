package net.tshape.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.tshape.springboot.exception.ResourceNotFoundException;
import net.tshape.springboot.model.Ticket;
import net.tshape.springboot.repository.TicketRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TicketController {

	@Autowired
	private TicketRepository TicketRepository;
	
	// get all tickets
	@GetMapping("/tickets")
	public List<Ticket> getAllEmployees(){
		return TicketRepository.findAll();
	}		
	
	// create tickets rest api
	@PostMapping("/tickets")
	public Ticket createTicket(@RequestBody Ticket ticket) {
		return TicketRepository.save(ticket);
	}
	
	// get tickets by id rest api
	@GetMapping("/tickets/{id}")
	public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
		Ticket ticket = TicketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket does not exist with id :" + id));
		return ResponseEntity.ok(ticket);
	}
	
	// update tickets rest api
	
	@PutMapping("/tickets/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket ticketDetails){
		Ticket ticket = TicketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket does not exist with id :" + id));
		
		ticket.setTicketAuthor(ticketDetails.getTicketAuthor());
		ticket.setTicketTitle(ticketDetails.getTicketTitle());
		ticket.setTicketStatus(ticketDetails.getTicketStatus());
		ticket.setTicketTimestamp(ticketDetails.getTicketTimestamp());
		ticket.setTicketDescription(ticketDetails.getTicketDescription());
		
		Ticket updatedTicket = TicketRepository.save(ticket);
		return ResponseEntity.ok(updatedTicket);
	}
	
	// delete tickets rest api
	@DeleteMapping("/tickets/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTicket(@PathVariable Long id){
		Ticket ticket = TicketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket does not exist with id :" + id));
		
		TicketRepository.delete(ticket);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
