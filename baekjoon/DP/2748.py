input = int(input())
a,b,c = 0,1,1
if (input == 0):
  print(0)
elif (input == 1):
  print(1)
else:
  for i in range(2, input):
    a = b
    b = c
    c = a + b
  print(c)