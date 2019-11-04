// Test away!
import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import Controls from './Controls'

//match to the snapshot

test('match snapshot for controls', () => {
    const wrapper = rtl.render(<Controls/>)
    expect(wrapper.asFragment()).toMatchSnapshot()
})

test('button render to screen', () => {
    const wrapper = rtl.render(<Controls/>)
    const buttons = wrapper.getAllByRole('button')

    expect(buttons).toBeVisible()
})