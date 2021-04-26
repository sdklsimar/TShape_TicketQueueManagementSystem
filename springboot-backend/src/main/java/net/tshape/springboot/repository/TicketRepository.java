package net.tshape.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.tshape.springboot.model.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long>{

}
