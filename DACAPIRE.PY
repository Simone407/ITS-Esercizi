
# PROVARE A CPIRE PERCHE SI FA IF NOT IN....


# CON CHAT





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
#     def __init__(self,customer_id: str,name: str,rented_movies: list[Movie]):
#         self.customer_id = customer_id
#         self.name = name
#         self.rented_movies = rented_movies

#     def rent_movie(self,movie:Movie):
        
#         if movie.title == False:
#             self.rented_movies.append(movie.title)
#         else:
#             print(f"Il film '{movie.title}' è già noleggiato.")
            
#     def return_movie(self,movie:Movie):
        
#         if movie.title in self.rented_movies:
#             self.rented_movies.remove(movie.title)
#         else: 
#             print(f"Il film '{movie.title}' non è stato noleggiato da questo cliente.")
            
# class VideoRentalStore:
    
#     def __init__(self,movies: dict[str, Movie],customers: dict[str, Customer]):
#         self.movies = movies
#         self.customers = customers
    
#     def add_movie(self, movie_id: str, title: str, director: str):

#         if movie_id in self.movies:
#             print(f"Il film con ID '{movie_id}' esiste già.")
#         else:
#             new_movie = Movie(movie_id, title, director)
#             self.movies[movie_id] = new_movie
#             print(f"Il film '{title}' è stato aggiunto con successo.")


#     def register_customer(self,customer_id: str, name: str): 
        
#         if customer_id not in self.customers:
#             new_customer = Customer()
#             self.customers[customer_id] = new_customer
#         else:
#             print(f"Il cliente con ID '{customer_id}' è già registrato.")

# # rent_movie(customer_id: str, movie_id: str): Permette al cliente di noleggiare un film se entrambi esistono nel videonoleggio, altrimenti stampa il messaggio "Cliente o film non trovato."


#     def rent_movie(self,customer_id: str, movie_id: str):
        
#         if movie_id in self.movies and customer_id in self.customers:
#             self.rent_movie()
#         else:
#             print( "Cliente o film non trovato.")


# # return_movie(customer_id: str, movie_id: str): Permette al cliente di restituire un film se entrambi esistono nel videonoleggio, altrimenti stampa il messaggio "Cliente o film non trovato."


#     def return_movie(self,customer_id: str, movie_id: str):

#         if movie_id in self.movies and customer_id in self.customers:
#             self.return_movie()
#         else:
#             print( "Cliente o film non trovato.")


# # get_rented_movies(customer_id: str): list[Movie] - Restituisce la lista dei film noleggiati dal client (customer.rented_movies) se il cliente esiste nel videonoleggio, altrimenti stampa il messaggio "Cliente non trovato." e ritorna una lista vuota.


#     def get_rented_movies(self,customer_id: str): list[Movie]:
    
#         if customer_id in self.customers:
#             customer.rented_movies()
#         else:
#             print( "Cliente o film non trovato.")
#             return []
    







