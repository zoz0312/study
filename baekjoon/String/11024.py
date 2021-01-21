import sys
from functools import reduce

input = input()
inputs = [sys.stdin.readline() for i in range(int(input))]

for x in inputs:
  num = list(map(int, x.split(' ')))
  print(reduce(lambda prev, cur: prev + cur, num))