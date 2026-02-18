import random

alunos = ['','','','']
alunos[0] = input('Digite o nome do primeiro aluno: ')
alunos[1] = input('Digite o nome do segundo aluno: ')
alunos[2] = input('Digite o nome do terceiro aluno: ')
alunos[3] = input('Digite o nome do quarto aluno: ')

random.shuffle(alunos)

print(f'A ordem dos alunos será: \n 1 - {alunos[0]} \n 2 - {alunos[1]} \n 3 - {alunos[2]} \n 4 - {alunos[3]}')