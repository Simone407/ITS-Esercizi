""" class Ticket:
    
    def __init__(self,ticket_id:str,movie: str,seat: str,is_booked: bool):
        
        self.ticket_id = ticket_id
        self.movie = movie
        self.seat = seat
        self.is_booked = is_booked
        
    def book(self) -> None:
        
        if self.is_booked == False:
            self.is_booked = True
        
        else:
            print(f"Il biglietto per '{self.movie}' posto '{self.seat}' è già prenotato.")
            
            
    def cancel(self) -> None:
        
        if self.is_booked == True:
            self.is_booked = False
        else: 
            print(f"Il biglietto per '{self.movie}' posto '{self.seat}' non risulta prenotato.")
            
class Viewer:
        
        def __init__(self,viewer_id: str,name: str,booked_tickets: list[Ticket]):
            
            self.viewer_id = viewer_id
            self.name = name
            self.booked_tickets = booked_tickets
            
        def book_ticket(self,ticket: Ticket) -> None: 
            
            if Ticket.is_booked == False:
                self.book_ticket.append(Ticket)
                Ticket.book()
            else: 
                print(f"Il biglietto per '{ticket.movie}' non è disponibile.")
                
                
        def cancel_ticket(self,ticket: Ticket) -> None:
            
            if Ticket in self.booked_tickets:
                
                self.booked_tickets.remove(Ticket)
                Ticket.cancel()
                
            else: 
                print(f"Il biglietto per '{ticket.movie}' non è stato prenotato da questo spettatore.")
                
class Cinema:
        
        def __init__(self,tickets: dict[str, Ticket],viewers: dict[str, Viewer]):
            
            self.tickets = tickets
            self.viewers = viewers
            
        def add_ticket(self,ticket_id: str, movie: str, seat: str) -> None:
            
            if isinstance(ticket_id):
                print(f"Il biglietto con ID '{ticket_id}' esiste già.",)
                
            else: 
                ticket_id.add(Ticket)
                
        
        def register_viewer(self,viewer_id: str, name: str) -> None:
            
            if isinstance(viewer_id):
                print(f"Lo spettatore con ID '{viewer_id}' è già registrato.")
                
            else:
                viewer_id.add(self.Viewer)
                
                
        def book_ticket(self,viewer_id: str, ticket_id: str) -> None: 
            
            if isinstance(viewer_id) and isinstance(ticket_id):
                
                self.viewer.book_ticket(Ticket)
                
            else: 
                print("Spettatore o biglietto non trovato.")
            
        
        def cancel_ticket(self,viewer_id: str, ticket_id: str) -> None:
            
            if isinstance(viewer_id) and isinstance(ticket_id):
                self.viewer.cancel_ticket(ticket)
            
            else:
                print("Spettatore o biglietto non trovato.")
                
        
        def list_available_tickets(tickets) -> list[str]:
            
            return [ticket.ticket_id for ticket in tickets if not ticket.is_booked]
        
        
        def list_viewer_bookings(self,viewer_id: str) -> list[str] | str:
            
            if isinstance(viewer_id):
                return self.ticket_id
            
            else: 
                 return "Errore: spettatore non trovato" """
            


class Ticket:
    def __init__(self, ticket_id: str, movie: str, seat: str):
        self.ticket_id = ticket_id
        self.movie = movie
        self.seat = seat
        self.is_booked = False  # Parte sempre False
    
    def book(self) -> None:
        if not self.is_booked:  # o: if self.is_booked == False
            self.is_booked = True
        else:
            print(f"Il biglietto per '{self.movie}' posto '{self.seat}' è già prenotato.")
    
    def cancel(self) -> None:
        if self.is_booked:  # o: if self.is_booked == True
            self.is_booked = False
        else:
            print(f"Il biglietto per '{self.movie}' posto '{self.seat}' non risulta prenotato.")


class Viewer:
    def __init__(self, viewer_id: str, name: str):
        self.viewer_id = viewer_id
        self.name = name
        self.booked_tickets = []  # Parte sempre vuota
    
    def book_ticket(self, ticket: Ticket) -> None:
        if not ticket.is_booked:  # ticket minuscolo!
            self.booked_tickets.append(ticket)  # booked_tickets (l'attributo)
            ticket.book()  # ticket minuscolo!
        else:
            print(f"Il biglietto per '{ticket.movie}' non è disponibile.")
    
    def cancel_ticket(self, ticket: Ticket) -> None:
        if ticket in self.booked_tickets:  # ticket minuscolo!
            self.booked_tickets.remove(ticket)
            ticket.cancel()
        else:
            print(f"Il biglietto per '{ticket.movie}' non è stato prenotato da questo spettatore.")


class Cinema:
    def __init__(self):
        self.tickets = {}   # Parte vuoto
        self.viewers = {}   # Parte vuoto
    
    def add_ticket(self, ticket_id: str, movie: str, seat: str) -> None:
        if ticket_id in self.tickets:  # in, non isinstance!
            print(f"Il biglietto con ID '{ticket_id}' esiste già.")
        else:
            self.tickets[ticket_id] = Ticket(ticket_id, movie, seat)
    
    def register_viewer(self, viewer_id: str, name: str) -> None:
        if viewer_id in self.viewers:  # in, non isinstance!
            print(f"Lo spettatore con ID '{viewer_id}' è già registrato.")
        else:
            self.viewers[viewer_id] = Viewer(viewer_id, name)
    
    def book_ticket(self, viewer_id: str, ticket_id: str) -> None:
        if viewer_id in self.viewers and ticket_id in self.tickets:
            viewer = self.viewers[viewer_id]  # Prendi l'oggetto
            ticket = self.tickets[ticket_id]  # Prendi l'oggetto
            viewer.book_ticket(ticket)  # Chiama il metodo
        else:
            print("Spettatore o biglietto non trovato.")
    
    def cancel_ticket(self, viewer_id: str, ticket_id: str) -> None:
        if viewer_id in self.viewers and ticket_id in self.tickets:
            viewer = self.viewers[viewer_id]
            ticket = self.tickets[ticket_id]
            viewer.cancel_ticket(ticket)
        else:
            print("Spettatore o biglietto non trovato.")
    
    def list_available_tickets(self) -> list[str]:
        # tickets è dict[str, Ticket], devi iterare sui .values()
        return [ticket_id for ticket_id, ticket in self.tickets.items() 
                if not ticket.is_booked]
    
    def list_viewer_bookings(self, viewer_id: str) -> list[str] | str:
        if viewer_id not in self.viewers:
            return "Errore: spettatore non trovato."
        viewer = self.viewers[viewer_id]
        return [ticket.ticket_id for ticket in viewer.booked_tickets]
