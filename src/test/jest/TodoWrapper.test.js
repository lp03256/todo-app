import React from 'react';
import { shallow } from 'enzyme';
import TodoWrapper from '../../components/TodoWrapper';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoWrapper', () => {
    it('should add a todo when addTodo is called', () => {
      const wrapper = shallow(<TodoWrapper />);
      const todoText = 'New Task';
  
      wrapper.find('#todo-form').prop('addTodo')(todoText);
      const todos = wrapper.find('#todo-form').map(todo => todo.prop('task'));
  
      expect(todos.length).toBe(1);
    });
  
  });
