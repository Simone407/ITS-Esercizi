class Animal:
    def __init__(self, id: str, nome: str, age_years: int, weight_kg: float):
        self.id = id
        self.nome = nome
        self.age_years = age_years
        self.weight_kg = weight_kg

    def species(self):
        pass

    def daily_food_grams(self):
        pass

    def info(self):
        return f"ID: {self.id} - Nome: {self.nome} - Età: {self.age_years} anni - Peso: {self.weight_kg} kg"    

    def bmi_like(self) -> float:
        return self.weight_kg / (self.age_years + 1) 



class Dog(Animal):
    def __init__(self, id, nome, age_years, weight_kg, breed: str = "", is_trained: bool = False):
        super().__init__(id, nome, age_years, weight_kg)
        self.breed = breed
        self.is_trained = is_trained

    def species(self):
        return "Cane"

    def daily_food_grams(self):
        return 200 + self.age_years * 50

    def info(self):
        base_info = super().info()
        return f"{base_info} - Specie: {self.species()} - Razza: {self.breed} - Addestrato: {'Sì' if self.is_trained else 'No'}"



class Cat(Animal):
    def __init__(self, id, nome, age_years, weight_kg, is_indoor: bool = True, favorite_toy: str = ""):
        super().__init__(id, nome, age_years, weight_kg)
        self.is_indoor = is_indoor
        self.favorite_toy = favorite_toy

    def species(self):
        return "Gatto"

    def daily_food_grams(self):
        return 100 + self.age_years * 30

    def info(self):
        base_info = super().info()
        return f"{base_info} - Specie: {self.species()} - Domestico: {'Sì' if self.is_indoor else 'No'} - Giocattolo preferito: {self.favorite_toy}"

class Shelter:
    def __init__(self, animals: dict = None, adoptions: dict = None):
        if animals is None:
            animals = {}
        if adoptions is None:
            adoptions = {}
        self.animals = animals
        self.adoptions = adoptions

    def add_animal(self, animal: Animal):
        if animal.id not in self.animals:
            self.animals[animal.id] = animal
        else:
            raise ValueError(f"Animale con ID {animal.id} già presente nel rifugio.") 

    def get_animal(self, animal_id: str) -> Animal:
        return self.animals.get(animal_id, None)

    def list_all(self):
        return list(self.animals.values())

    def is_adopted(self, animal_id: str) -> bool:
        return animal_id in self.adoptions

    def set_adopted(self, animal_id: str, adopter_name: str):
        self.adoptions[animal_id] = adopter_name

if __name__ == "__main__":

    dog1 = Dog(id="D001", nome="Fido", age_years=3, weight_kg=20.5, breed="Labrador", is_trained=True)
    cat1 = Cat(id="C001", nome="Whiskers", age_years=2, weight_kg=5.0, is_indoor=True, favorite_toy="Pallina")

    shelter = Shelter()
    shelter.add_animal(dog1)
    shelter.add_animal(cat1)

    print("----------------------------------------------------------------------------------------------------------------------")
    print("Elenco animali nel rifugio:")
    print("")
    print(dog1.info())
    print(cat1.info())  
    print("----------------------------------------------------------------------------------------------------------------------")


    print(f"Stato di adozione per {dog1.nome}: {shelter.is_adopted(dog1.id)}")
    print(f"Stato di adozione per {cat1.nome}: {shelter.is_adopted(cat1.id)}")


    shelter.set_adopted(dog1.id, "Mario Rossi")
    print(f"Stato di adozione per {dog1.nome} dopo l'adozione: {shelter.is_adopted(dog1.id)} - Adottante: {shelter.adoptions[dog1.id]}")
