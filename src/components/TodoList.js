import {Box} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selector';
import { Todo } from './Todo';

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filteredTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
      <Box my={5}>
          {filteredTodos.length ? filteredTodos.map(todo =>
            <Todo key={`todo-${todo.id}`} todo={todo} />
          ): <Box textAlign="center" my="4">No Todos Yay!</Box>}
      </Box>
  );
};
