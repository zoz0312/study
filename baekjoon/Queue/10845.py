import sys
from collections import deque

input = int(input())
inputs = [sys.stdin.readline() for i in range(input)]

queue = deque([])
for x, val in enumerate(inputs):
  isLen = (len(queue) > 0)
  splited = val.split()
  command = splited[0]
  if (command == 'push'):
    queue.append(int(splited[1]))
  elif (command == 'pop'):
    if (isLen):
      print(queue.popleft())
    else:
      print(-1)
  elif (command == 'size'):
    print(len(queue))
  elif (command == 'empty'):
    if (isLen):
      print(0)
    else:
      print(1)
  elif (command == 'front'):
    if (isLen):
      print(queue[0])
    else:
      print(-1)
  elif (command == 'back'):
    if (isLen):
      print(queue[len(queue) - 1])
    else:
      print(-1)