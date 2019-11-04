// Test away// Test away

import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import Dashboard from './Dashboard'

  // defaults to unlocked and open
test('Dashboard renders with the Display and Controls', () => {
    const wrapper = rtl.render(<Dashboard />);
  
    const unLocked = wrapper.getByText(/unlocked/i);
    expect(unLocked).toBeInTheDocument();
  
    const open = wrapper.getByText(/open/i);
    expect(open).toBeInTheDocument();
})

    //controls / display
test('Dashboard renders and matches snapshot', () => {
    const wrapper = rtl.render(<Dashboard />);
  
    expect(wrapper.asFragment()).toMatchSnapshot();
})
  
//closing the door test

test('Door Closes', async() => {
    const wrapper = rtl.render(<Dashboard/>)
    await wrapper.findByText(/open/i)
    
    const close = wrapper.getByText(/close/i)
    
    rtl.act(() => {
        rtl.fireEvent.click(close)
    })
    expect(wrapper.getByText(/close/i)).not.toBe(/open/i)
})

//locking the door test
test('should lock the door', async () => {
    const wrapper = rtl.render(<Dashboard />)
    await wrapper.findByText(/unlocked/i)

    const lock = wrapper.queryByText(/lock gate/i)

    rtl.act(() => {
        rtl.fireEvent.click(lock)
    })

    expect(wrapper.queryByText(/unlock/i)).not.toBe(/locked/i)

})

