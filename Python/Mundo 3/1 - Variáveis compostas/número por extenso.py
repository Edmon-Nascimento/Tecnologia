numeros = "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezesete", "dezoito", "dezenove", "vinte"

num = int(input("Digite um número de 0 a 20: "))

while num > 20 or (num < 0):
    print("\nTente novamente.")
    num = int(input("Digite um número de 0 a 20: "))

print(f"Você digitou o número {numeros[num]}")