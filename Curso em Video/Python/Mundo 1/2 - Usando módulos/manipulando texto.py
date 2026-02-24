frase = 'Curso em Vídeo Python'
#[c][u][r][s][o][ ][e][m][ ][v][i][d][e][o][ ][p][y][t][h][o][n]
# 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20

print(frase[9])
print(frase[9:13])
print(frase[9:21])
print(frase[9:21:2])
print(frase[:5])
print(frase[15:])
print(frase[9::3])

# Tamanho
print(len(frase))

# Contagem
print(frase.count('o'))
print(frase.count('o', 0, 13))

# Busca
print(frase.find('deo'))
print(frase.find('Android'))

# Existência
print('curso' in frase)

# Transformações (agora imprimindo o retorno)
print(frase.replace('Python', 'Android'))
print(frase.upper())
print(frase.lower())
print(frase.capitalize())
print(frase.title())

# Espaços
frase = '   Aprenda Python   '
print(frase)
print(frase.strip())
print(frase.rstrip())
print(frase.lstrip())

# Divisão
frase = 'Curso em Vídeo Python'
lista = frase.split()
print(lista)

# Junção
print('-'.join(lista))
