
class Creatura():

    def __init__(self,_nome:str):
        
        self.nome = _nome

    
    def setNome(self,_nome:int) -> None:

        self._nome = _nome 
       
        if _nome:
            return True
        
        

    def getNome(self) -> int:
        return self._nome
    



    def __str__(self) -> None:      
        return f"Nome creatura: {self._nome}"
    
