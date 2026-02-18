altura = float(input('Digite a altura da parede: '))
largura = float(input('Digite a largura da parede: '))

area = (altura * largura)
litros = area/2

print(f'A sua parede tem {area:.2f}m² de área. Você precisará de {litros:.2f} litros de tinta')