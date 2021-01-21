# ll = list(map(int, input().split()))

input = int(input())
# input = 6

if input == 1:
  print(0, 1)
elif input == 2:
  print(1, 0)
else:
  a,b,c = 0,1,1
  for i in range(input):
    a = b
    b = c
    c = a + b
  B = c - b
  A = b - a
  print(A, B)

# 1 1 A 1
# 2 1 B 1
# 3 2 BA  1 1
# 4 3 BAB 2 1
# 5 5 BABBA  3 2
# 6 8 BABBABAB 5 3

