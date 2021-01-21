input = int(input())

if input == 0:
  print(0)
elif input == 1:
  print(1)
else:
  s = [0, 1]
  for i in range(2, input + 1):
    s.append(s[len(s) - 1] + s[len(s) - 2])
  print(s[len(s) -1])