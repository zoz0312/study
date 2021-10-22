class TreeNode:
  def __init__(self):
    self.__data = None
    self.__left = None
    self.__right = None

  def __del__(self):
    print('TreeNode of {} is deleted'.format(self.data))

  @property
  def data(self):
    return self.__data

  @data.setter
  def data(self, data):
    self.__data = data

  @property
  def left(self):
    return self.__left

  @left.setter
  def left(self, left):
    self.__left = left

  @property
  def right(self):
    return self.__right

  @right.setter
  def right(self, right):
    self.__right = right