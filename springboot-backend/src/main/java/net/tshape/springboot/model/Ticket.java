package net.tshape.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Tickets")
public class Ticket {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "ticket_author")
	private String ticketAuthor;

	@Column(name = "ticket_title")
	private String ticketTitle;
	
	
	@Column(name = "ticket_status")
	private String ticketStatus;
	

	@Column(name = "ticket_timestamp")
	private String ticketTimestamp;
	
	@Column(name = "ticket_description")
	private String ticketDescription;
	
	public Ticket() {
		
	}
	
	public Ticket(String ticketAuthor, String ticketTitle, String ticketStatus, String ticketTimestamp, String ticketDescription) {
		super();
		this.ticketAuthor = ticketAuthor;
		this.ticketTitle = ticketTitle;
		this.ticketStatus = ticketStatus;
		this.ticketTimestamp= ticketTimestamp;
		this.ticketDescription= ticketDescription;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	
	public String getTicketAuthor() {
		return ticketAuthor;
	}
	public void setTicketAuthor(String ticketAuthor) {
		this.ticketAuthor = ticketAuthor;
	}
	public String getTicketTitle() {
		return ticketTitle;
	}

	public void setTicketTitle(String ticketTitle) {
		this.ticketTitle = ticketTitle;
	}
	public String getTicketStatus() {
		return ticketStatus;
	}

	public void setTicketStatus(String ticketStatus) {
		this.ticketStatus = ticketStatus;
	}
	
	public String getTicketTimestamp() {
		return ticketTimestamp;
	}

	public void setTicketTimestamp(String ticketTimestamp) {
		this.ticketTimestamp = ticketTimestamp;
	}
	
	public String getTicketDescription() {
		return ticketDescription;
	}

	public void setTicketDescription(String ticketDescription) {
		this.ticketDescription = ticketDescription;
	}

}
