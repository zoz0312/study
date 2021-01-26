from node import Node

class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.d_size = 0

  # return Boolean
  # 연결 리스트가 비어있는지 여부를 확인합니다.
  def empty(self):
    return self.d_size == 0

  # return Integer
  # 연결 리스트의 데이터 개수를 반환합니다.
  def size(self):
    return self.d_size

  # return Node
  # 데이터 삽입
  def append(self, data):
    new_node = Node(data)
    if self.empty():
      self.head = new_node
      self.tail = new_node
      self.d_size += 1
    else:
      self.tail.next = new_node
      self.tail = new_node
      self.d_size += 1

  # return data
  # 데이터를 순회하면서 대상 데이터를 찾아 그 위치와 함께 반환합니다.
  def search_target(self, target, start = 0):
    if self.empty():
      return None
    pos = 0
    cur = self.head
    if pos >= start and target == cur.data:
      return cur.data, pos

    while cur.next:
      pos += 1
      cur = cur.next
      if pos >= start and target == cur.data:
        return cur.data, pos

    return None, None

  # return data
  # 인자로 위치를 전달하면 연결 리스트에서 해당 위치의 데이터를 반환합니다.
  def search_pos(self, pos):
    if pos > self.size() - 1:
      return None

    cnt = 0
    cur = self.head
    if cnt == pos:
      return cur.data

    while cnt < pos:
      cur = cur.next
      cnt += 1

    return cur.data

  # return data
  # 데이터를 삭제합니다.
  # 데이터가 있고 삭제한 뒤에 데이터를 반환하고,
  # 삭제할 데이터가 없으면 None을 반환합니다.
  def remove(self, target):
    if self.empty():
      return None

    bef = self.head
    cur = self.head

    if target == cur.data:
      if self.size() == 1:
        self.head = None
        self.tail = None
        self.d_size = 0
      else:
        self.head = self.head.next
        self.d_size -= -1
      return cur.data

    while cur.next:
      bef = cur
      cur = cur.next
      if target == cur.data:
        if cur == self.tail:
          self.tail = bef
        bef.next = cur.next
        self.d_size -= 1
        return cur.data
    return None

def show_list(slist):
  if slist.empty():
    print('List Empty')
    return

  for i in range(slist.size()):
    print(slist.search_pos(i), end=' ')

if __name__ == '__main__':
  slist = LinkedList()
  print('data length: {}'.format(slist.size()))
  show_list(slist)
  print()

  slist.append(2)
  slist.append(3)
  slist.append(4)
  slist.append(5)
  slist.append(6)
  print('data length: {}'.format(slist.size()))
  show_list(slist)
  print()

  # if slist.remove(2):
  #   print('data length: {}'.format(slist.size()))
  #   show_list(slist)
  #   # print()