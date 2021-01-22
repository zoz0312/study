input = int(input())
coin5 = 0
coin2 = 0
while input > 0:
  if (input % 5 == 0):
    coin5 = int(input / 5)
    input = 0
  else:
    input -= 2
    coin2 += 1
print((coin5 + coin2) if input == 0 else -1)