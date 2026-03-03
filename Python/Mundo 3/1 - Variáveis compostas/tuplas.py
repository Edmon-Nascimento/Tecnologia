#Tuplas são imutáveis
#Aceitam vários tipos de variáveis
#Parênteses são opcionais
lanche = ('hambúrguer', 'refrigerante', 'pizza', 'sorvete')

#lanche[1] = 'suco'
print(lanche)

for comida in lanche:
    print(f"Eu vou comer {comida}")
print("Comi pra caramba!")