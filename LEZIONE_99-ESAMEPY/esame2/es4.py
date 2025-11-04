""" Calcola Deviazione Standard - PUNTI 1 """


def calculate_std_dev(nums: list[float]) -> float:
    if len(nums) == 0:
        raise ValueError("lista vuota")
    media = sum(nums) / len(nums)
    varianza = sum((x - media) ** 2 for x in nums) / len(nums)
    return varianza ** 0.5
