
class ContactManager:

    def __init__(self, contacts: dict[str, list[str]]):
        self.contacts = contacts



    def create_contact(self, name: str, phone_numbers: list[str]) -> dict[str, list[str]]:
 
        if name in self.contacts:
            raise ValueError("Il contatto è già nella rubrica.")
        
        else: 

            self.contacts[name] = phone_numbers

            return {name: phone_numbers}



    def add_phone_number(self, contact_name: str, phone_number: str) -> dict[str, list[str]]: 

        if contact_name not in self.contacts:

            raise ValueError("Il contatto non esiste")
        
        if phone_number in self.contacts[contact_name]:

            raise ValueError("il numero è già associato al contatto")
        
        self.contacts[contact_name].append(phone_number)

        return {contact_name: self.contacts[contact_name]}



    def remove_phone_number(self,contact_name: str, phone_number: str)  -> dict[str, list[str]]:
        
        if contact_name not in self.contacts:

            raise ValueError("il valore non esiste")

        if phone_number not in self.contacts[contact_name]:

            raise ValueError("il numero di telefono non è nella lista")
        
        self.contacts[contact_name].remove(phone_number)

        return {contact_name: self.contacts[contact_name]}



    def update_phone_number(self,contact_name: str, old_phone_number: str,new_phone_number: str) -> dict[str, list[str]]:

        if contact_name not in self.contacts:

            raise ValueError("il contatto non esiste") 

        if old_phone_number not in self.contacts[contact_name]:

            raise ValueError("il numero non è presente")
        
        index:int  = self.contacts[contact_name].index(old_phone_number)

        self.contacts[contact_name][index] = new_phone_number 

        return {contact_name: self.contacts[contact_name]}
    


    def list_contacts(self) -> list[str] :
    
        return list(self.contacts.keys())



    def list_phone_numbers(self,contact_name: str) -> list[str]:

        if contact_name not in self.contacts:

            raise ValueError("il contatto non esiste")
        
        return self.contacts[contact_name]


    def search_contact_by_phone_number(self,phone_number: str) -> list[str]: 
      
        contacts_list: list[str] = []


        for contacts, list_contacts in self.contacts.items():

            if phone_number in list_contacts:

                contacts_list.append(contacts)


            if  contacts_list == []:

                raise Exception ("nessun contatto trovato con questo numero di telefono")



        return contacts_list
