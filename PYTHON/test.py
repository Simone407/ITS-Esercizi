

# # rows = int(input("inserisci il numeo di righe: "))

# # for i in range(rows):
# #     for j in range(rows - i - 1):
# #         print(end="")
# #     for j in range(2 * i + 1):
# #         print("*", end="")

# #     print()

# tasks = {
     
#      "id_1":{
#         "description": "qualcosa...",
#         "completato": False
#      },

#      "id_2":{
#         "description": "qualcosa...",
#         "completato": False
#      },
# }


# class TaskManager:

#     def __init__(self,tasks:dict[str,dict[str,bool | str]] = {}) -> None:
        
#         self.tasks:dict[str,dict[str,bool | str]] = tasks

    
#     def create_task(self,task_id: str, description: str) -> dict[str,dict[str,bool | str]]| str:


#         if task_id in self.tasks:

#             raise KeyError("errore chiave esiste già")
        
#         else: 
#                 temp_dict:dict[str,dict[str,bool | str]] = {"description": description,
#                                                             "completato": False}

#                 self.tasks[task_id] = temp_dict 

        
#         return temp_dict
    

#     def complete_task(self,task_id:str) -> dict [str,dict[str,bool | str]] | str:
                                                 
#         if task_id not in self.tasks:
            
#             return "chiave non esistente"

#         else:

#             if self.tasks[task_id]["completato"]:

#                 return "task già completata"
                 
#             else:
            
#                 self.tasks[task_id]["completato"] = True

#                 return self.tasks[task_id]
            
    

#     def update_description(self,task_id:str,nuova_descrizione: str) -> dict | str:

#         if task_id not in self.tasks:

#             return "task non è nel dizionario"
        
#         else: 
#             self.tasks[task_id]["description"] = nuova_descrizione

#             return self.tasks[task_id]
        

#     def remove_tasks(self, task_id:str) -> dict | str:

#         if task_id not in self.tasks:

#             return "task non presente"
        
#         else: 
#                 self.tasks.pop(task_id)


    
#     def list_tasks(self) -> list[str]:
         
#         # lista_chiavi: list[str] = []

#         # for key in self.tasks.keys():

#         #     lista_chiavi.append(key)


#         return list(self.tasks.keys())
    

#     def get_task(self,task_id:str) -> dict | str:

#         if task_id not in self.tasks:
            
#             return "task non presente"
        
#         else: 

#             return self.tasks[task_id]





# def print_seq(): 
    
#     print("Sequenza a):")
#     for number in range(1,8):
#         print(number)
#     print()

#     print("Sequenza b):")
#     for number in range(3,24,5):
#         print(number)
#     print()

#     print("Sequenza c):")
#     for number in range(20,-11,-6):
#         print(number)
#     print()

#     print("Sequenza d):")
#     for number in range(19,52,8):
#         print(number)
#     print()
    
#     return




# def classifica_numeri(lista: int) -> dict[str:list[int]]:
    
#     dizionario_1: dict[str, list[int]] = {"pari": [], "dispari": []}
    
#     for element in lista:
#         if element%2== 0:
#            dizionario_1["pari"].append(element) 
    
#         else:
#            dizionario_1["dispari"].append(element)
           
#     return dizionario_1




# def check_access(username: str, password: int, is_active: bool) -> str:
        
#     if username == "admin" and password=="12345" and is_active == True :
#         return("Accesso consentito")
        
#     else: 
#         return ("Accesso negato")



# def check_combination(conditionA: bool, conditionB: bool, conditionC: bool) -> str:
    
#     if conditionA == True or (conditionB and conditionC):
        
#         return ("Operazione permessa")
    
#     else:
#         return ("Operazione negata")
    
    




# xs = [1, 2, 3, 4, 5]


# for num in xs:
#     if num > 3:

#         print(sum(xs))