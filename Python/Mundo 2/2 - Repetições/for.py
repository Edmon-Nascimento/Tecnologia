# -------------------------
# Exemplo 1: Percorrendo uma sequência com range
# -------------------------
print("Exemplo 1: range básico")

for i in range(5):
    print("Valor:", i)

print("Fim do exemplo 1\n")


# -------------------------
# Exemplo 2: range com início e fim
# -------------------------
print("Exemplo 2: range com início e fim")

for i in range(1, 6):
    print("Número:", i)

print("Fim do exemplo 2\n")


# -------------------------
# Exemplo 3: range com passo
# -------------------------
print("Exemplo 3: range com passo")

for i in range(0, 10, 2):
    print("Par:", i)

print("Fim do exemplo 3\n")


# -------------------------
# Exemplo 4: Percorrendo lista
# -------------------------
print("Exemplo 4: Lista")

nomes = ["Ana", "Carlos", "João"]

for nome in nomes:
    print("Nome:", nome)

print("Fim do exemplo 4\n")


# -------------------------
# Exemplo 5: Percorrendo string
# -------------------------
print("Exemplo 5: String")

for letra in "Python":
    print("Letra:", letra)

print("Fim do exemplo 5\n")


# -------------------------
# Exemplo 6: Usando break
# -------------------------
print("Exemplo 6: break")

for i in range(10):
    if i == 5:
        print("Parando no 5")
        break
    print(i)

print("Fim do exemplo 6\n")


# -------------------------
# Exemplo 7: Usando continue
# -------------------------
print("Exemplo 7: continue")

for i in range(5):
    if i == 2:
        continue
    print(i)

print("Fim do exemplo 7\n")


# -------------------------
# Exemplo 8: Índice com enumerate
# -------------------------
print("Exemplo 8: enumerate")

frutas = ["Maçã", "Banana", "Uva"]

for indice, fruta in enumerate(frutas):
    print(indice, "-", fruta)

print("Fim do exemplo 8\n")


# -------------------------
# Exemplo 9: Loop aninhado
# -------------------------
print("Exemplo 9: Loop dentro de loop")

for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")

print("Fim do exemplo 9\n")


# -------------------------
# Fim do tutorial
# -------------------------
print("Todos os exemplos de FOR foram executados!")