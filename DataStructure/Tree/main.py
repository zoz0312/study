from binaryTree import BinaryTree

if __name__ == "__main__":
  bt = BinaryTree()

  n1 = bt.make_node()
  bt.set_node_data(n1, 1)

  n2 = bt.make_node()
  bt.set_node_data(n2, 2)

  n3 = bt.make_node()
  bt.set_node_data(n3, 3)

  n4 = bt.make_node()
  bt.set_node_data(n4, 4)

  n5 = bt.make_node()
  bt.set_node_data(n5, 5)

  n6 = bt.make_node()
  bt.set_node_data(n6, 6)

  n7 = bt.make_node()
  bt.set_node_data(n7, 7)


  bt.set_root(n1)

  bt.make_left_sub_tree(n1, n2)
  bt.make_right_sub_tree(n1, n3)

  bt.make_left_sub_tree(n2, n4)
  bt.make_right_sub_tree(n2, n5)

  bt.make_left_sub_tree(n3, n6)
  bt.make_right_sub_tree(n3, n7)