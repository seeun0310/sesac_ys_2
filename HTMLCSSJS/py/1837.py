a, b = map(int, input().split())
c = 0

for i in (2, b+1) :
    if a % i == 0 :
        print("BAD", i)
        c += 1
        break
    else:
        continue
    
if c == 0 :
    print("GOOD")
        
    
        
 