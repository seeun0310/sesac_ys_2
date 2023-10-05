a = int(input())
b = 1
for i in range(0, a):
    c, d = map(int, input().split())
    if c == b :
        b = d
    elif d == b :
        b = c
    else:
        b = b
    
print(b)
        