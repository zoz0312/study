from treeNode import TreeNode

class BinaryTree:
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
    return cur.data

  def set_node_data(self, cur, data):
    cur.data = data

  def get_left_sub_tree(self, cur):
    return cur.left

  def get_right_sub_tree(self, cur):
    return cur.right

  def make_left_sub_tree(self, cur, left):
    cur.left = left

  def make_right_sub_tree(self, cur, right):
    cur.right = right

  # 전위순위
  def preorder_traverse(self, cur, func):
    if not cur:
      return

    func(cur.data)
    self.preorder_traverse(cur.left, func)
    self.preorder_traverse(cur.right, func)

  # 중위 순위
  def inorder_traverse(self, cur, func):
    if not cur:
      return

    self.inorder_traverse(cur.left, func)
    func(cur.data)
    self.inorder_traverse(cur.right, func)

  # 후위 순위
  def postorder_traverse(self, cur, func):
    if not cur:
      return

    self.postorder_traverse(cur.left, func)
    self.postorder_traverse(cur.right, func)
    func(cur.data)