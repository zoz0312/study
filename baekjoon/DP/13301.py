input = int(input())
# input = 80

if input == 1:
  print(4)
elif input == 2:
  print(6)
else:
  n1, n2, n3 = 0, 1, 1
  for i in range(1, input):
    n1 = n2
    n2 = n3
    n3 = n1 + n2
  print((n2 * 2) + (n3 * 2))
