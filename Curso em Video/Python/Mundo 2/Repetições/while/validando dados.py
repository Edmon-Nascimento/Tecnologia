sexo = str(input("Qual seu sexo? [M/F] ")).strip().upper()

while sexo not in "MmFf":
    print("Sexo invalido")
    sexo = str(input("Qual seu sexo? [M/F] ")).strip().upper()

print("Fim")