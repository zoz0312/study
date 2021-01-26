from treeNode import TreeNode

class BianryTree:
  def __init__(self):
    self.root = None

  def get_root(self):
    return self.root

  def set_root(self, r):
    self.root = r

  def make_node(self):
    new_node = TreeNode()
    return new_node

  def get_node_data(self, cur):
    return cur.get_data()

  def set_node_data(self, cur, data):
    cur.set_data(data)

  def get_left_sub_tree(self, cur):
    return cur.left

  def get_right_sub_tree(self, cur):
    return cur.right

  def make_left_sub_tree(self, cur, left):
    cur.left = left

  def make_right_sub_tree(self, cur, right):
    cur.right = right