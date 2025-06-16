from string import punctuation


def words(text:str) -> dict[str,int]:

    d:dict[str,int] = {}
    text = text.lower()
    tokens: list[str] = text.split(" ")

    for token in tokens:
        
        token = token.strip(punctuation)

        if not token:
            continue

        if token not in d:
            d[token] = 1
        else: 
            d[token] += 1 

    return d





print(words("Hello, world! Hello... PYTHON? world."))    