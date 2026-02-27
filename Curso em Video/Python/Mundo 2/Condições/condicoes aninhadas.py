n1 = float(input("Informe a nota do primeiro semestre: "))
n2 = float(input("Informe a nota do segundo semestre: "))
media = (n1+n2)/2

print(f"Média final: {media}")

if media < 5:
     print("Aluno reprovado")
elif media >= 5 and media < 7:
    print("Aluno em recuperação")
else:
    print("Aluno Aprovado")