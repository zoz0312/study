import sys

input = int(input())
inputs = [list(sys.stdin.readline().rstrip()) for i in range(input)]

xControl = [1, 0, -1, 0]
yControl = [0, 1, 0, -1]

def dfs(i, x, y):
  global input
  global inputs

  if (x < 0 or y < 0 or input <= x or input <= y):
    return 0
  if (inputs[y][x] == '-1' or inputs[y][x] == '0'):
    return 0

  inputs[y][x] = '-1'

  ans = 1
  for ctn in range(4):
    ans += dfs(i+1, x + xControl[ctn], y + yControl[ctn])
  return ans

ans = []

for y in range(input):
  for x in range(input):
    if (inputs[y][x] == '1'):
      ans.append(dfs(0, x, y))

ans.sort()
print(len(ans))
for idx, val in enumerate(ans):
  print(val)
