from math import pow, sqrt, hypot

n1 = float(input('Digite o valor do primeiro cateto do triângulo retângulo: '))
n2 = float(input('Digite o valor do outro cateto do triângulo retângulo: '))
hip = sqrt(pow(n1,2) + pow(n2,2))

#hip = hypot(n1, n2)

print(f'O valor da hipotenusa do triângulo retângulo de catetos {n1} e {n2} é: {hip:.2f}')