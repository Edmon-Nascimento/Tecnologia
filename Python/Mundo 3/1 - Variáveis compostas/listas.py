num = [2,5,9,1]

num[2] = 3

print(num)
num.sort(reverse=True)

num.insert(2,3)
print(num)

num.remove(3)

# Listas compostas

dados = []

n = int(input("Digite o número de pessoas que serão registradas: "))

for c in range(n):
    dados.append(input('Nome: '))
    dados.append(int(input('Idade: ')))

pessoas = []
pessoas.append(dados[:])

print(pessoas)
print(pessoas[0][0])