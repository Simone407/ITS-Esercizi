'''8-9. Messages: Make a list containing a series of short text messages. 
Pass the list to a function called show_messages(), which prints each text message.'''

mess:list = ["prova","ciao","python"]

def show_messages(mess:list):
    for message in mess:
        print(message)
    return mess

show_messages(mess)
