#Tuplas são imutáveis
#Aceitam vários tipos de variáveis
#Parênteses são opcionais

tupla = ('hambúrguer', 'refrigerante', 'pizza', 'sorvete')

#tupla[1] = 'suco'
print(tupla)

for comida in tupla:
    print(f"Eu vou comer {comida}")
print("Comi pra caramba!")

# Principais métodos de tuplas em Python

# count(valor)
# Retorna quantas vezes um valor aparece na tupla
tupla.count("refrigerante")

# index(valor, inicio=0, fim=len(tupla))
# Retorna o índice da primeira ocorrência do valor
tupla.index("pizza")

# len(tupla)
# Retorna o número de elementos da tupla
len(tupla)

# max(tupla)
# Retorna o maior valor da tupla
max(tupla)

# min(tupla)
# Retorna o menor valor da tupla
min(tupla)

# sum(tupla)
# Retorna a soma dos elementos da tupla (quando numéricos)
sum(tupla)

# sorted(tupla)
# Retorna uma lista com os elementos da tupla ordenados
sorted(tupla)

# any(tupla)
# Retorna True se algum elemento for verdadeiro
any(tupla)

# all(tupla)
# Retorna True se todos os elementos forem verdadeiros
all(tupla)