targets = [3.14, 3.141, 3.1415, 3.14159]
for target in targets:
    pi, segno, denom, termini = 0, 1, 1, 0
    while round(pi, len(str(target))-2) != target:
        pi += segno * (4 / denom)
        segno *= -1
        denom += 2
        termini += 1
    print(f"Per ottenere π ≈ {target} servono {termini} termini.")