import React from 'react';
import { shallow } from 'enzyme';
import EditTodoForm from '../../components/EditTodoForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('EditTodoForm', () => {
  it('should call updateTodo prop on form submit', () => {
    const mockUpdateTodo = jest.fn();
    const task = { id: 1, task: 'Example Task' };
    const wrapper = shallow(<EditTodoForm task={task} updateTodo={mockUpdateTodo} />);
    const newValue = 'Updated Task';
    const event = { 
        target: {
            value: newValue 
        },
        preventDefault: function(){}
     };

    wrapper.find('#outlined-basic').simulate('change', event);
    wrapper.find('#submit-button').simulate('click', event);

    expect(mockUpdateTodo).toHaveBeenCalledWith(task.id, newValue);
    expect(mockUpdateTodo).toHaveBeenCalledTimes(1);
  });
});
