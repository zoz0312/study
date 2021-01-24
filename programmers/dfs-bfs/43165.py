from collections import deque

def solution(numbers, target):
  answer = 0
  stack = deque([(0, 0)])
  while stack:
    sum, idx = stack.popleft()
    if idx == len(numbers):
      if sum == target:
        answer += 1
    else:
      number = numbers[idx]
      stack.append((sum + number, idx + 1))
      stack.append((sum - number, idx + 1))
  return answer

print(
  solution([1, 1, 1, 1, 1], 3)
)