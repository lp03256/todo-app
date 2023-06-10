import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../components/Todo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Todo', () => {
  const mockTask = {
    id: 1,
    task: 'Example Task',
    completed: false,
  };

  const mockToggleComplete = jest.fn();
  const mockEditTodos = jest.fn();
  const mockDeleteTodos = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Todo
        task={mockTask}
        toggleComplete={mockToggleComplete}
        editTodos={mockEditTodos}
        deleteTodos={mockDeleteTodos}
      />
    );
  });

  it('should render task correctly', () => {
    const taskText = wrapper.find('p').text();
    expect(taskText).toBe(mockTask.task);
  });

  it('should call toggleComplete when task is clicked', () => {
    wrapper.find('p').simulate('click');
    expect(mockToggleComplete).toHaveBeenCalledWith(mockTask.id);
  });

  it('should call editTodos when EditIcon is clicked', () => {
    wrapper.find('#edit-icon').simulate('click');
    expect(mockEditTodos).toHaveBeenCalledWith(mockTask.id);
  });

  it('should call deleteTodos when DeleteIcon is clicked', () => {
    wrapper.find('#delete-icon').simulate('click');
    expect(mockDeleteTodos).toHaveBeenCalledWith(mockTask.id);
  });
});
