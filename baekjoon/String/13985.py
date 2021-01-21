input = input().split()
# input = '1 + 2 = 3'.split();

calced = int(input[0]) + int(input[2]);
if (calced == int(input[4])):
  print('YES')
else:
  print('NO')