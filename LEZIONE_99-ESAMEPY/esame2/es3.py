""" Filtra e Concatena Numeri - PUNTI 1
Scrivi una funzione con il seguente header:
filter_and_concat(nums: list[int], min_val: int) -> str che prenda una
lista di interi e un valore minimo, e restituisci una stringa concaten """


def filter_and_concat(nums: list[int], min_val: int) -> str:
    filtered = [str(num) for num in nums if num > min_val]
    return ",".join(filtered)
