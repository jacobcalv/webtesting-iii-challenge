// Test away!
import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import Display from './Display'

//Display Snapshot and ensures that file displays

test('should display and match snapshot', () => {
    const wrapper = rtl.render(<Display/>)
    expect(wrapper.asFragment()).toMatchSnapshot()
    wrapper.debug()
})

test('should display unlocked at start', () => {
    const wrapper = rtl.render(<Display/>)
    const unlocked = wrapper.queryByText(/unlocked/i)
    expect(unlocked).toBeVisible();
})

// test('Door Closes', async() => {
//     const wrapper = rtl.render(<Dashboard/>)
//     await wrapper.findByText(/open/i)
    
//     const close = wrapper.getByText(/close/i)
    
//     rtl.act(() => {
//         rtl.fireEvent.click(close)
//     })
//     expect(wrapper.getByText(/close/i)).not.toBe(/open/i)
// })

test('')