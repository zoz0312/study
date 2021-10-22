import sys
from collections import deque

input = list(map(int, input().split()))
inputs = [list(map(int, sys.stdin.readline().split())) for i in range(input[1])]
visited = [[0 for _ in range(input[0])] for y in range(input[1])]

queue = deque([])
for y in range(input[1]):
  for x in range(input[0]):
    if (inputs[y][x] == 1):
      queue.append((int(x), int(y), 0))
      visited[y][x] = 1
    elif (inputs[y][x] == -1):
      visited[y][x] = -1

xControl = [-1, 0, 1, 0]
yControl = [0, -1, 0, 1]

ans = 0
while queue:
  x, y, depth = queue.popleft()

  if depth > ans:
    ans = depth

  for ctl in range(4):
    dx = x + xControl[ctl]
    dy = y + yControl[ctl]
    if (dx == input[0] or dy == input[1] or dx < 0 or dy < 0):
      continue
    if (visited[dy][dx] == 0):
      visited[dy][dx] = 1
      queue.append((dx, dy, depth+1))

isAllDone = True
for x in range(input[1]):
  if 0 in visited[x]:
    isAllDone = False
    break
print(ans if isAllDone else -1)