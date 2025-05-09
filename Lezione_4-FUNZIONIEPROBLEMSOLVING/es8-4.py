'''8-4. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love Python. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.'''

def make_shirt(size:str,text:str):
    print(f"La misura della maglia è {size} con la scritta {text}")


make_shirt("M","I love Python")
make_shirt("L","I love Python")

make_shirt(size="XS", text="ciao")

