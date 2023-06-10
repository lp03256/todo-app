import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../../components/TodoForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoForm', () => {
  it('should call addTodo prop on form submit', () => {
    const mockAddTodo = jest.fn();
    const wrapper = shallow(<TodoForm addTodo={mockAddTodo} />);
    const newValue = 'New Task';
    const event = { 
        target: {
            value: newValue 
        },
        preventDefault: function(){}
     };

    wrapper.find('#outlined-basic').simulate('change', event);
    wrapper.find('#todo-button').simulate('click', event);

    expect(mockAddTodo).toHaveBeenCalledWith(newValue);
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
  });
});
