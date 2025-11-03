
# class Movie:
#     def __init__(self, movie_id: str, title: str, director: str, is_rented: bool = False):
#         self.movie_id = movie_id
#         self.title = title
#         self.director = director
#         self.is_rented = is_rented

#     def rent(self):
#         if not self.is_rented:
#             self.is_rented = True
#             print(f"Il film '{self.title}' è stato noleggiato con successo.")
#         else:
#             print(f"Il film '{self.title}' è già noleggiato.")

#     def return_movie(self):
#         if self.is_rented:
#             self.is_rented = False
#             print(f"Il film '{self.title}' è stato restituito con successo.")
#         else:
#             print(f"Il film '{self.title}' non è stato noleggiato.")

# class Customer:
#     def __init__(self, customer_id: str, name: str):
#         self.customer_id = customer_id
#         self.name = name
#         self.rented_movies = []  

#     def rent_movie(self, movie: Movie):
#         if not movie.is_rented:
#             self.rented_movies.append(movie)
#             movie.rent()
#         else:
#             print(f"Il film '{movie.title}' è già noleggiato.")

#     def return_movie(self, movie: Movie):
#         if movie in self.rented_movies:
#             self.rented_movies.remove(movie)
#             movie.return_movie()
#         else:
#             print(f"Il film '{movie.title}' non è stato noleggiato da questo cliente.")
            
# class VideoRentalStore:
#     def __init__(self, movies: dict[str, Movie], customers: dict[str, Customer]):
#         self.movies = movies
#         self.customers = customers
    
#     def add_movie(self, movie_id: str, title: str, director: str):
#         if movie_id in self.movies:
#             print(f"Il film con ID '{movie_id}' esiste già.")
#         else:
#             new_movie = Movie(movie_id, title, director)
#             self.movies[movie_id] = new_movie
#             print(f"Il film '{title}' è stato aggiunto con successo.")

#     def register_customer(self, customer_id: str, name: str):
#         if customer_id not in self.customers:
#             new_customer = Customer(customer_id, name)
#             self.customers[customer_id] = new_customer
#             print(f"Il cliente '{name}' è stato registrato con successo.")
#         else:
#             print(f"Il cliente con ID '{customer_id}' è già registrato.")

#     def rent_movie(self, customer_id: str, movie_id: str):
#         if movie_id in self.movies and customer_id in self.customers:
#             movie = self.movies[movie_id]
#             customer = self.customers[customer_id]
#             customer.rent_movie(movie)
#         else:
#             print("Cliente o film non trovato.")

#     def return_movie(self, customer_id: str, movie_id: str):
#         if movie_id in self.movies and customer_id in self.customers:
#             movie = self.movies[movie_id]
#             customer = self.customers[customer_id]
#             customer.return_movie(movie)
#         else:
#             print("Cliente o film non trovato.")

#     def get_rented_movies(self, customer_id: str):
#         if customer_id in self.customers:
#             customer = self.customers[customer_id]
#             if customer.rented_movies:
#                 print(f"Lista dei film noleggiati da {customer.name}:")
#                 for movie in customer.rented_movies:
#                     print(f"- {movie.title} ({movie.director})")
#                 return customer.rented_movies
#             else:
#                 print(f"{customer.name} non ha noleggiato alcun film.")
#                 return []
#         else:
#             print("Cliente non trovato.")
#             return []






# # Creazione di un nuovo videonoleggio
# videonoleggio = VideoRentalStore()

# # Aggiunta di nuovi film
# videonoleggio.add_movie("1", "Inception", "Christopher Nolan")
# videonoleggio.add_movie("2", "The Matrix", "Wachowski Brothers")

# # Registrazione di nuovi clienti
# videonoleggio.register_customer("101", "Alice")
# videonoleggio.register_customer("102", "Bob")

# # Noleggio di film
# videonoleggio.rent_movie("101", "1")
# videonoleggio.rent_movie("102", "2")

# # Tentativo di noleggiare un film già noleggiato
# videonoleggio.rent_movie("101", "1")

# # Restituzione di film
# videonoleggio.return_movie("101", "1")

# # Tentativo di restituire un film non noleggiato
# videonoleggio.return_movie("101", "1")

# # Ottenere la lista dei film noleggiati da un cliente
# rented_movies_alice = videonoleggio.get_rented_movies("101")
# print(f"Film noleggiati da Alice: {[movie.title for movie in rented_movies_alice]}")

# rented_movies_bob = videonoleggio.get_rented_movies("102")
# print(f"Film noleggiati da Bob: {[movie.title for movie in rented_movies_bob]}")








# class Account:
#     def __init__(self,account_id:str,balance:float):
#         self.account_id = account_id
#         self.balance = balance

#     def deposit(self,amount: float):
        
#         print("aggiungi l importo ao")

#         self.amount= float(input())

#         self.balance = self.balance + amount

#     def get_balance(self):
        
#         return self.balance

    
# class Bank:
    
#     def __init__(self,accounts: dict[str, Account]):
        
#         self.accounts = accounts
    

#     def create_account(self,account_id):
        
#         if account_id in self.accounts:
#             raise KeyError( "Account with this ID already exists")
#         else:
#             new_account_id = Account(account_id,balance=0)
#             self.accounts[account_id] = new_account_id



# # deposit(account_id, amount): deposita l'importo specificato sul conto con l'ID fornito.

    
#     def deposit(self,account_id, amount):
        
#         print("inserisci numero account")

#         self.account_id = input()

#         print("aggiungi l importo ao")

#         self.amount= float(input())

#         self.balance = self.balance + amount


# # get_balance(account_id): restituisce il saldo del conto con l'ID specificato. Solleva il seguente  KeyError "Account not found" se l'account non esiste.

#     def get_balance(self,account_id):
        
#         if not self.account_id:
#             raise KeyError ("Account not found")
        
#         else:
#             return self.account_id(self.get_balance)



# class Account:
#     def __init__(self, account_id: str, balance: float = 0.0):
#         self.account_id = account_id
#         self.balance = balance

#     def deposit(self, amount: float):
#         if amount <= 0:
#             raise ValueError("L'importo deve essere positivo")
#         self.balance += amount

#     def get_balance(self) -> float:
#         return self.balance


# class Bank:
#     def __init__(self):
#         self.accounts: dict[str, Account] = {}

#     def create_account(self, account_id: str):
#         if account_id in self.accounts:
#             raise KeyError("Account with this ID already exists")
#         self.accounts[account_id] = Account(account_id)

#     def deposit(self, account_id: str, amount: float):
#         if account_id not in self.accounts:
#             raise KeyError("Account not found")
#         self.accounts[account_id].deposit(amount)

#     def get_balance(self, account_id: str) -> float:
#         if account_id not in self.accounts:
#             raise KeyError("Account not found")
#         return self.accounts[account_id].get_balance()






# class Movie:
#     def __init__(self, movie_id: str, title: str, director: str, is_rented: bool = False):
#         self.movie_id = movie_id
#         self.title = title
#         self.director = director
#         self.is_rented = is_rented

#     def rent(self):
#         if not self.is_rented:
#             self.is_rented = True
#             print(f"Il film '{self.title}' è stato noleggiato con successo.")
#         else:
#             print(f"Il film '{self.title}' è già noleggiato.")

#     def return_movie(self):
#         if self.is_rented:
#             self.is_rented = False
#             print(f"Il film '{self.title}' è stato restituito con successo.")
#         else:
#             print(f"Il film '{self.title}' non è stato noleggiato.")

# class Customer:
#     def __init__(self, customer_id: str, name: str):
#         self.customer_id = customer_id
#         self.name = name
#         self.rented_movies = []  

#     def rent_movie(self, movie: Movie):
#         if not movie.is_rented:
#             self.rented_movies.append(movie)
#             movie.rent()
#         else:
#             print(f"Il film '{movie.title}' è già noleggiato.")

#     def return_movie(self, movie: Movie):
#         if movie in self.rented_movies:
#             self.rented_movies.remove(movie)
#             movie.return_movie()
#         else:
#             print(f"Il film '{movie.title}' non è stato noleggiato da questo cliente.")
            
# class VideoRentalStore:
#     def __init__(self, movies: dict[str, Movie], customers: dict[str, Customer]):
#         self.movies = movies
#         self.customers = customers
    
#     def add_movie(self, movie_id: str, title: str, director: str):
#         if movie_id in self.movies:
#             print(f"Il film con ID '{movie_id}' esiste già.")
#         else:
#             new_movie = Movie(movie_id, title, director)
#             self.movies[movie_id] = new_movie
#             print(f"Il film '{title}' è stato aggiunto con successo.")

#     def register_customer(self, customer_id: str, name: str):
#         if customer_id not in self.customers:
#             new_customer = Customer(customer_id, name)
#             self.customers[customer_id] = new_customer
#             print(f"Il cliente '{name}' è stato registrato con successo.")
#         else:
#             print(f"Il cliente con ID '{customer_id}' è già registrato.")

#     def rent_movie(self, customer_id: str, movie_id: str):
#         if movie_id in self.movies and customer_id in self.customers:
#             movie = self.movies[movie_id]
#             customer = self.customers[customer_id]
#             customer.rent_movie(movie)
#         else:
#             print("Cliente o film non trovato.")

#     def return_movie(self, customer_id: str, movie_id: str):
#         if movie_id in self.movies and customer_id in self.customers:
#             movie = self.movies[movie_id]
#             customer = self.customers[customer_id]
#             customer.return_movie(movie)
#         else:
#             print("Cliente o film non trovato.")

#     def get_rented_movies(self, customer_id: str):
#         if customer_id in self.customers:
#             customer = self.customers[customer_id]
#             if customer.rented_movies:
#                 print(f"Lista dei film noleggiati da {customer.name}:")
#                 for movie in customer.rented_movies:
#                     print(f"- {movie.title} ({movie.director})")
#                 return customer.rented_movies
#             else:
#                 print(f"{customer.name} non ha noleggiato alcun film.")
#                 return []
#         else:
#             print("Cliente non trovato.")
#             return []




# # Creazione di un nuovo videonoleggio
# videonoleggio = VideoRentalStore()

# # Aggiunta di nuovi film
# videonoleggio.add_movie("1", "Inception", "Christopher Nolan")
# videonoleggio.add_movie("2", "The Matrix", "Wachowski Brothers")

# # Registrazione di nuovi clienti
# videonoleggio.register_customer("101", "Alice")
# videonoleggio.register_customer("102", "Bob")

# # Noleggio di film
# videonoleggio.rent_movie("101", "1")
# videonoleggio.rent_movie("102", "2")

# # Tentativo di noleggiare un film già noleggiato
# videonoleggio.rent_movie("101", "1")

# # Restituzione di film
# videonoleggio.return_movie("101", "1")

# # Tentativo di restituire un film non noleggiato
# videonoleggio.return_movie("101", "1")

# # Ottenere la lista dei film noleggiati da un cliente
# rented_movies_alice = videonoleggio.get_rented_movies("101")
# print(f"Film noleggiati da Alice: {[movie.title for movie in rented_movies_alice]}")

# rented_movies_bob = videonoleggio.get_rented_movies("102")
# print(f"Film noleggiati da Bob: {[movie.title for movie in rented_movies_bob]}")



# # Aggiunta di nuovi film
# videonoleggio.add_movie("1", "Inception", "Christopher Nolan")
# videonoleggio.add_movie("2", "The Matrix", "Wachowski Brothers")
# videonoleggio.add_movie("3", "Interstellar", "Christopher Nolan")

# # Registrazione di nuovi clienti
# videonoleggio.register_customer("101", "Alice")

# # Noleggio di più film
# videonoleggio.rent_movie("101", "1")
# videonoleggio.rent_movie("101", "2")

# # Verifica dei film noleggiati da Alice
# rented_movies_alice = videonoleggio.get_rented_movies("101")
# print(f"Film noleggiati da Alice: {[movie.title for movie in rented_movies_alice]}")







class Book:

    def __init__(self,book_id: str,title:str,author: str,is_borrowed: bool):

        self.book_id = book_id
        self.title = title
        self.author = author
        self.is_borrowed = is_borrowed

    
    def borrow(self):
        self.is_borrowed = True

    def return_book(self):
        
        self.is_borrowed = False


class Member:
    
    def __init__(self,member_id: str, name: str, borrowed_books: list[Book]):

        self.member_id = member_id
        self.name = name
        self.borrowed_books = borrowed_books

    def borrow_book(self,book):
        
        if not self.borrowed_books:
            self.borrowed_books(book)

    def return_book(self,book):
        
        self.borrowed_books.remove(book)


class Library:

    def __init__(self,books: dict[str, Book],members: dict[str, Member],):
        
        self.books = books
        self.members = members

    
    def add_book(self,book_id: str, title: str, author: str): 

        new_book = Book(book_id,title,author)
        self.books[book_id] = new_book


    def register_member(self,member_id:str, name: str):

        new_member = Member(member_id,name)
        self.members[member_id] = new_member

    def borrow_book(self,member_id: str, book_id: str): 

        self.borrow_book(member_id,book_id)

    

    def return_book(self,member_id: str, book_id: str):

        self.return_book(member_id,book_id)

    
    def get_borrowed_books(self,member_id): list[Book]