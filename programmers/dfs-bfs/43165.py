from collections import deque

def bfs_solution(numbers, target):
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

dfs_answer = 0
def dfs_solution(numbers, target):
  global dfs_answer
  dfs(0, numbers, target, 0)
  return dfs_answer

def dfs(idx, numbers, target, value):
  global dfs_answer
  N = len(numbers)
  if (idx == N):
    if (target == value):
      dfs_answer += 1
    return

  dfs(idx + 1, numbers, target, value + numbers[idx])
  dfs(idx + 1, numbers, target, value - numbers[idx])

print(
  dfs_solution([1, 1, 1, 1, 1], 3)
)