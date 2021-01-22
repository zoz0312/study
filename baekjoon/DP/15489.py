input = list(map(int, input().split()))
# input = [3, 1, 4]

treeRange = input[0] + input[2] - 1
start = input[0] - 1
end = input[2] + 1
point = input[1] - 1
tree = []
for x in range(treeRange):
  appendData = []
  for y in range(x+1):
    if (y == 0 or y == x):
      appendData.append(1)
    else:
      sum = tree[x-1][y-1] + tree[x-1][y]
      appendData.append(sum)
  tree.append(appendData)

total = 0
totalTree = 1
for x in range(start, treeRange):
  for y in range(point, totalTree + point):
    total += tree[x][y]
  totalTree += 1
print(total)