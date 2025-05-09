'''8-11. Archived Messages: Start with your work from Exercise 8-10. Call the function send_messages() with a copy of the list of messages. 
After calling the function, print both of your lists to show that the original list has retained its messages.'''



mess:list = ["prova","ciao","python"]
sent_messages:list = []

def send_messages(mess:list, sent_messages:list):
    for message in mess:
        print(message)
        sent_messages.append(message)

send_messages(mess, sent_messages)


send_messages(mess.copy(), sent_messages)

print("Messaggi mostrati:", mess)
print("Messaggi inviati:", sent_messages)

