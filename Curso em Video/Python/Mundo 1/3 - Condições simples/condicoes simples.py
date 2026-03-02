limite_velocidade = 80

velocidade = int(input("Qual a velocidade do carro em Km/h? "))
if velocidade > limite_velocidade:
    print("O carro passou acima do limite de velocidade")
    multa = (velocidade - limite_velocidade)*7
    print(f"Multa: R${multa},00 ")
else:
    print("O carro passou dentro do limite de velocidade")