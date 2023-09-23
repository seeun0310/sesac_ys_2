a = int(input())
b = list(map(int, input().split()))
max = b[0]
min = b[0]

for i in b:
    if i > max :
        max = i
    elif i < min :
        min = i

print(min, max)