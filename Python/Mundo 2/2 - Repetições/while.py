# -------------------------
# Exemplo 1: Contador simples
# -------------------------
print("Exemplo 1: Contador simples")

contador = 1

while contador <= 5:
    print("Contador:", contador)
    contador += 1

print("Fim do exemplo 1\n")


# -------------------------
# Exemplo 2: Entrada do usuário (senha)
# -------------------------
print("Exemplo 2: Validação de senha")

senha = ""

while senha != "1234":
    senha = input("Digite a senha: ")

print("Acesso liberado!")
print("Fim do exemplo 2\n")


# -------------------------
# Exemplo 3: Usando break
# -------------------------
print("Exemplo 3: Usando break")

while True:
    comando = input("Digite algo ('sair' para encerrar): ")

    if comando == "sair":
        print("Encerrando loop...")
        break

print("Fim do exemplo 3\n")


# -------------------------
# Exemplo 4: Usando continue
# -------------------------
print("Exemplo 4: Usando continue")

numero = 0

while numero < 5:
    numero += 1

    if numero == 3:
        continue

    print("Número:", numero)

print("Fim do exemplo 4\n")


# -------------------------
# Exemplo 5: Evitando loop infinito
# -------------------------
print("Exemplo 5: Cuidado com loop infinito")

contador = 1

while contador <= 3:
    print("Executando:", contador)
    contador += 1  # ESSENCIAL para não travar o programa

print("Fim do exemplo 5\n")


# -------------------------
# Fim do tutorial
# -------------------------
print("Todos os exemplos foram executados!")