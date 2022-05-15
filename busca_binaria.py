from random import randint

# Adicionando do 1 ao 100 na lista num
num=[]
c=0
while len(num) != 100:
    c+=1
    num.append(c)

# Computador 1 escolhendo número aleatório de 1 a 100
e= randint(num[0], num[-1])
print(f'Escolhido: {e}\n')

# Computador 2 tentando adivinhar com método binário
def escolhendo(num, e):

    corte= len(num) // 2
    c= num.index(corte)
    t=0
    n= corte

    print(f'Tentativa 0: {n}')

    while n != e:
        if n > e:
            num= num[:c]
            print(f'{num} \n')

        if n < e:
            num= num[c+1:]
            print(f'{num} \n')
        # Pegar número da metade
        corte= num[-1] - len(num) // 2
        c= num.index(corte)
        n=corte
        t+=1
        print(f'Tentativa {t}: {n}')

    return n, t

a= escolhendo(num, e)

print(f'\nO Computador 2 levou {a[1]} tentativas até acertar o número {a[0]}.')