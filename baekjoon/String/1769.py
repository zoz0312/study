input = input()

val = input
cnt = 0
is3 = False
while True:
  if (int(val) < 10):
    if (int(val) % 3 == 0):
      is3 = True
    break
  sum = 0
  for x in val:
    sum += int(x)
  cnt += 1
  val = str(sum)
print(cnt)
print('YES' if is3 == True else 'NO')