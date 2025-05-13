
class MovieCatalog:

    def __init__(self) -> None:
        self.setCatalog()

    def setCatalog(self) -> None:
        self.catalog: dict[str,list[str]] = {}
        
    def getCatalog(self) -> dict[str,list[str]]:
        return self.catalog

    def add_movie(self,director_name:str,movies:list[str]) -> None:
        if not director_name:
            print("fornire un nome per il regista ")
        elif not movies:
            print("Fornire una lista di film non vuota")
        else:

            if director_name in self.catalog:

                for movie in movies:
                    if movie in self.catalog[director_name]:
                        print(f"il film {movie} è già presente in catalogo !")

                    else: 
                        self.catalog[director_name].append(movie)
            else:
                self.catalog[director_name] = movies


    def remove_movie(self,director_name:str, movie:str) -> None:

        if not director_name:
            print("fornire un nome per il regista ")
        elif not movie:
            print("Fornire un film valido")
        else:
            if director_name in self.catalog and movie in self.catalog[director_name]:

                self.catalog[director_name].remove(movie)

            if not self.catalog[director_name]:
                
                del self.catalog[director_name]

    
    def list_directors(self) -> list[str]:
        return list(self.catalog.keys())

    def __str__(self)->str:

        string: str = ""

        for key , value in self.catalog.items():
            string = "\n" + key + ": " + str(value) + "n\ "

        return string


