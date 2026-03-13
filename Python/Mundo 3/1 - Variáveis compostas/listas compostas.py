dados = []

n = int(input("Digite o número de pessoas que serão registradas: "))

for c in range(n):
    dados.append(input('Nome: '))
    dados.append(int(input('Idade: ')))

pessoas = []
pessoas.append(dados[:])

print(pessoas)
print(pessoas[0][0])