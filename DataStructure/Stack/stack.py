class Stack:
  def __init__(self):
    self.container = list()

  def push(self, data):
    self.container.append(data)

  def pop(self):
    return self.container.pop()

  def empty(self):
    return not self.container

  def peek(self):
    return self.container[-1]

if __name__ == '__main__':
  s = Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  s.push(4)
  s.push(5)

  while not s.empty():
    data = s.pop()
    print(data, end = ' ')