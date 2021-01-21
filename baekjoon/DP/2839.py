input = int(input())
# input = 2
cnt = 0
while input > 0:
  if input % 5 == 0:
    calced = input // 5
    input = calced
    cnt = cnt + calced
    break
  input = input - 3
  cnt = cnt + 1

if (input < 0):
  print(-1)
else:
  print(cnt)