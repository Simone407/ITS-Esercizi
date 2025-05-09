'''8-10. Sending Messages: Start with a copy of your program from Exercise 8-9. 
Write a function called send_messages() that prints each text message and moves each message to a new list called sent_messages as it’s printed. 
After calling the function, print both of your lists to make sure the messages were moved correctly.'''


lista_messaggi:list = ["prova","ciao","python"]


def send_messages(messaggi):

    sent_messages = []
    upper_bound = len(messaggi)
    print(f"{messaggi=}\n{sent_messages=}\n\n")
    for i in range(len(lista_messaggi)):
        
        message = messaggi.pop(0)
        sent_messages.append(message)

        print(f"{messaggi=}\n{sent_messages=}\n\n")


send_messages(lista_messaggi)