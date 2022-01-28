interface Todo {
  title: string;
  description: string;
}

interface Todo2 {
  title?: string;
  description?: string;
}

// Partial<Type>
const updateTodo = (todo: Todo, fieldsToupdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToupdate };
}
const todo1: Todo = {
  title: 'AJu',
  description: 'desc'
}
const todo2 = updateTodo(todo1, {
  description: '12312'
});

// Required<Type>
const requiredTodo: Todo2 = { title: 'title' };
const requiredTodo2: Required<Todo2> = { title: 'ttt', description: 'desc' };
