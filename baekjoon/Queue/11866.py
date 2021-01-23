from collections import deque

input = list(map(int, input().split()))
circle = deque([(x + 1) for x in range(input[0])])
answer = []
cnt = 1
while len(circle) > 0:
  if cnt == input[1]:
    answer.append(circle.popleft())
    cnt = 1
  else:
    circle.append(circle.popleft())
    cnt += 1
print('<' + ', '.join(map(str, answer)) + '>')