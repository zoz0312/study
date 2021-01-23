from collections import deque

input = int(input())
arr = deque([x for x in range(1, input + 1)])
flag = True
while len(arr) != 1:
  if (flag == True):
    arr.popleft()
  else:
    arr.append(arr.popleft())
  flag = False if flag == True else True
print(arr.pop())
