import requests
import json

if __name__ == "__main__":

    response = requests.get("http://127.0.0.1:5000/")
    print(response.json())  

    response = requests.get("http://127.0.0.1:5000/animals")
    print(response.json()) 



    response = requests.get("http://127.0.0.1:5000/animals/D001")
    print(response.json())  
