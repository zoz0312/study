def solution(n, computers):
  answer = 0
  arr = [0 for x in range(n)]

  for x in range(n):
    if (arr[x] == 0):
      answer += dfs(x, computers, arr)

  return answer

def dfs (i, computers, visited):
  if (visited[i] == 1):
    return 0

  visited[i] = 1
  for x in range(len(computers[i])):
    if (computers[i][x] == 1):
      dfs (x, computers, visited)
  return 1

print(
  solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])
  # solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])
  # solution(6, [
  #   [1, 0, 1, 1, 0, 0],
  #   [0, 1, 0, 0, 1, 1],
  #   [1, 0, 1, 1, 1, 1],
  #   [1, 0, 1, 1, 1, 1],
  #   [0, 1, 1, 1, 1, 1],
  #   [0, 1, 1, 1, 1, 1]
  # ])
)