import sys
from collections import deque

saveStack = deque([])

input = int(input())
inputs = deque(list(map(int, sys.stdin.readline().split())))

fail = False
cnt = 1
while (len(inputs) > 0) or (len(saveStack) != 0):
  num = -1
  if (len(saveStack) != 0 and cnt == saveStack[-1]):
    saveStack.pop()
    cnt += 1
  else:
    if (len(inputs) != 0):
      num = inputs.popleft()
    if (cnt == num):
      cnt += 1
    else:
      if (num != -1):
        saveStack.append(num)
      else:
        fail = True
        break

if (fail == True):
  print('Sad')
else:
  print('Nice')