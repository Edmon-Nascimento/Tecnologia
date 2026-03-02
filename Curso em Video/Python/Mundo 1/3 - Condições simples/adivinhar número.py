import random

num_gerado = random.randint(1, 10)

num_chutado = int(input("Tente adivinhar o número que pensei [1 - 10]: "))

if num_chutado==num_gerado:
    print("Parabéns! Você acertou! \n Vamos jogar novamente?")
else:
    print(f"Infelizmente você errou. O número correto era {num_gerado} \n Tente novamente.")